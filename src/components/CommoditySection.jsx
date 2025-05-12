// src/components/CommoditySection.jsx
const CommoditySection = ({ commodities }) => {
  return (
    <div className="bg-white text-black p-4 rounded-md shadow-md">
      <h2 className="text-center font-bold text-lg mb-1">
        Harga Rata-Rata Komoditas Produsen Hari ini 12 Mei 2025 di wilayah Nasional
      </h2>
      <p className="text-center text-red-600 text-sm mb-4">
        * Harga dibandingkan dengan harga pada hari sebelumnya 11 Mei 2025
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {commodities.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded overflow-hidden shadow">
            <div className="relative h-32 bg-gray-300 flex items-center justify-center">
              <p className="absolute z-10 text-white text-lg font-semibold">{item.name}</p>
              <img src={item.image} alt={item.name} className="object-cover w-full h-full opacity-40" />
            </div>
            <div className="bg-green-500 text-center text-white font-semibold py-2">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommoditySection;
