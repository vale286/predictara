import { useState } from "react";
import NavbarSection from "../components/NavbarSection";
import AboutSection from "../components/AboutSection";
import FilterSection from "../components/FilterSection";
import CommoditySection from "../components/CommoditySection";
import PriceChart from "../components/PriceChart"; 
import PetaStatusHargaPanganSection from "../components/PetaStatusHargaPanganSection";
import FooterSection from "../components/FooterSection";
import InputForm from "../components/InputForm";

const IndexPage = () => {
  const [panelType, setPanelType] = useState("Produsen");
  const [region, setRegion] = useState("Nasional");

  const handleInputSubmit = (commodity, market) => {
    console.log("Komoditas:", commodity);
    console.log("Pasar:", market);
  };

  const commodities = [
    { name: "GKP Tingkat Petani", price: "Harga Belum Tersedia", image: "/gkp.jpg" },
    { name: "GKG Tingkat Penggilingan", price: "Harga Belum Tersedia", image: "/gkg.jpg" },
    { name: "Beras Medium Penggilingan", price: "Harga Belum Tersedia", image: "/medium.jpg" },
    { name: "Beras Premium Penggilingan", price: "Harga Belum Tersedia", image: "/premium.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 min-h-screen text-white">
      <NavbarSection />

      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-xl font-bold mt-8 text-center">lorem ipsum</h1>

        <AboutSection />

        <FilterSection panelType={panelType} setPanelType={setPanelType} region={region} setRegion={setRegion} />

        <hr className="my-6 border-white" />

        

        <CommoditySection commodities={commodities} />

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
