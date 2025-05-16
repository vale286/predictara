import React, { useEffect, useState } from "react";
import NavbarSection from "../components/NavbarSection";
import AboutSection from "../components/AboutSection";
import FilterSection from "../components/FilterSection";
import CommoditySection from "../components/CommoditySection";
import InputForm from "../components/InputForm";
import PriceChart from "../components/PriceChart";
import PetaStatusHargaPanganSection from "../components/PetaStatusHargaPanganSection";
import FooterSection from "../components/FooterSection";

const IndexPage = () => {
  const [commodities, setCommodities] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [panelType, setPanelType] = useState("");
  const [region, setRegion] = useState("");

  const handleInputSubmit = async (commodity, market) => {
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputData: { commodity, market } }),
      });
      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error("Gagal melakukan prediksi:", err);
      setPrediction("Terjadi kesalahan saat memproses prediksi.");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/commodities")
      .then((res) => res.json())
      .then((data) => setCommodities(data))
      .catch((err) => console.error("Gagal memuat data:", err));
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 min-h-screen text-white">
      <NavbarSection />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-xl font-bold mt-8 text-center">lorem ipsum</h1>
        <AboutSection />
        <FilterSection
          panelType={panelType}
          setPanelType={setPanelType}
          region={region}
          setRegion={setRegion}
        />
        <hr className="my-6 border-white" />
        <CommoditySection commodities={commodities} />
        <div className="my-10">
          <h2 className="text-center text-2xl font-semibold mb-4">Prediksi Harga Komoditas</h2>
          <div className="bg-white rounded-md p-4 text-black">
            <InputForm onSubmit={handleInputSubmit} />
            {prediction && (
              <div className="mt-4 bg-gray-100 p-4 rounded">
                <h3 className="font-semibold mb-2 text-lg">Hasil Prediksi:</h3>
                <pre className="whitespace-pre-wrap">{prediction}</pre>
              </div>
            )}
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-center text-2xl font-semibold mb-4">Grafik Harga Komoditas</h2>
          <div className="bg-white rounded-md p-4 text-black">
            <PriceChart />
          </div>
        </div>
        <PetaStatusHargaPanganSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default IndexPage;