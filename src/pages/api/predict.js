import { GoogleGenerativeAI } from "@google/generative-ai";
import { fetchNewsTrends } from "@/services/scrapers/newsScraper";
import { fetchWeather } from "@/services/scrapers/weatherFetcher";
import { fetchCommodityPrices } from "@/services/scrapers/comodityprice";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.GOOGLE_API_KEY) {
    return res.status(500).json({ message: "GOOGLE_API_KEY belum di-set" });
  }

  try {
    const { inputData } = req.body;

    // Ambil data real-time dengan error handling
    let news = [], weather = {}, prices = [];
    try {
      [news, weather, prices] = await Promise.all([
        fetchNewsTrends(),
        fetchWeather("Jakarta"),
        fetchCommodityPrices(),
      ]);
    } catch (err) {
      return res.status(500).json({ message: "Gagal mengambil data eksternal", error: err.message });
    }

    const prompt = `
Kamu adalah analis pasar. Berikut data saat ini:
Berita: 
${news.map((t, i) => `${i + 1}. ${t}`).join("\n")}

Cuaca: ${weather.description || "-"}, suhu: ${weather.temp || "-"}°C

Harga pasar:
${prices.map(p => `${p.name}: ${p.price} (${p.change || ""})`).join("\n")}

Input user: ${JSON.stringify(inputData)}

Tolong berikan prediksi harga dan rekomendasi singkat.
`;

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.status(200).json({ prediction: text });
  } catch (error) {
    res.status(500).json({ message: "Error generating prediction", error: error.message });
  }
}