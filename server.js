const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const cron = require("node-cron");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let lastPrediction = null;

// Endpoint data komoditas (dummy)
app.get("/commodities", (req, res) => {
  res.json([
    { id: 1, name: "GKP Tingkat Petani", price: "Rp 5.000", image: "/gkp.jpg" },
    { id: 2, name: "GKG Tingkat Penggilingan", price: "Rp 5.500", image: "/gkg.jpg" },
    { id: 3, name: "Beras Medium Penggilingan", price: "Rp 7.100", image: "/beras.jpg" },
    { id: 4, name: "Beras Premium Penggilingan", price: "Rp 8.600", image: "/beras-premium.jpg" },
  ]);
});

// Endpoint prediksi manual (dummy, opsional)
app.post("/api/predict", (req, res) => {
  const { inputData } = req.body;
  const { commodity, market } = inputData;

  const hargaPrediksi = {
    "GKP Tingkat Petani": "Rp 5.100",
    "GKG Tingkat Penggilingan": "Rp 5.600",
    "Beras Medium Penggilingan": "Rp 7.100",
    "Beras Premium Penggilingan": "Rp 8.600",
  };

  const hasil = hargaPrediksi[commodity] || "Rp 0";
  const predictionText = `Harga prediksi untuk ${commodity} di pasar ${market} adalah ${hasil}`;

  lastPrediction = {
    prediction: predictionText,
    time: new Date().toLocaleString(),
  };

  res.json({ prediction: predictionText });
});

// Endpoint untuk mengambil prediksi terakhir
app.get("/api/last-prediction", (req, res) => {
  if (lastPrediction) {
    res.json(lastPrediction);
  } else {
    res.status(404).json({ message: "Belum ada prediksi" });
  }
});

// Cron job: otomatis prediksi setiap 3 jam ke Next.js API
cron.schedule('0 */3 * * *', async () => {
  try {
    const inputData = { commodity: "Beras Medium Penggilingan", market: "Jakarta" };
    // PANGGIL Next.js di port 3000, BUKAN Express sendiri!
    const response = await axios.post('http://localhost:3000/api/predict', { inputData });
    lastPrediction = {
      prediction: response.data.prediction,
      time: new Date().toLocaleString(),
    };
    console.log(`[${lastPrediction.time}] Prediksi otomatis:`, lastPrediction.prediction);
  } catch (err) {
    console.error('Gagal menjalankan prediksi otomatis:', err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});