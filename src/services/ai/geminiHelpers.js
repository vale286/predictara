// services/ai/geminiHelper.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export const analyzeMarketTrends = async (newsArray, weatherData, prices) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
Kamu adalah analis pasar untuk UMKM pangan.

Berikut adalah berita terkait:
${newsArray.map((t, i) => `${i + 1}. ${t}`).join("\n")}

Cuaca saat ini: ${weatherData.description}, suhu: ${weatherData.temp}°C

Harga pasar:
${prices.map(p => `${p.name}: ${p.price} (${p.change})`).join("\n")}

Tolong simpulkan:
- Apa potensi perubahan harga (naik/turun)
- Komoditas apa yang perlu diwaspadai
- Rekomendasi singkat untuk pelaku UMKM
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  return text;
};
