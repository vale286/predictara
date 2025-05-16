// src/components/PetaStatusHargaPanganSection.jsx
import React, { useEffect, useState } from "react";

const PetaStatusHargaPanganSection = () => {
  const [autoPrediction, setAutoPrediction] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/last-prediction")
      .then((res) => res.json())
      .then(setAutoPrediction)
      .catch(() => setAutoPrediction(null));
  }, []);

  return (
    <section className="bg-blue-100 text-gray-800 py-10 px-4 rounded-md shadow-md mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">PETA STATUS HARGA PANGAN</h1>

        {/* ...existing code... */}

        {/* Tampilkan prediksi otomatis */}
        <div className="bg-white p-4 rounded-md shadow-md mt-6">
          <h2 className="text-lg font-bold text-center text-gray-700 mb-2">
            Prediksi Otomatis Terbaru
          </h2>
          {autoPrediction ? (
            <>
              <div className="text-center">{autoPrediction.prediction}</div>
              <div className="text-xs text-gray-500 text-center mt-2">
                Waktu: {autoPrediction.time}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-400">Belum ada prediksi otomatis</div>
          )}
        </div>

        {/* ...existing code... */}
      </div>
    </section>
  );
};

export default PetaStatusHargaPanganSection;