const FilterSection = ({ panelType, setPanelType, region, setRegion }) => {
  return (
    <div className="flex flex-wrap items-end gap-6 mt-6 justify-center">
      <div className="flex flex-col">
        <label className="mb-1 text-white font-medium">Jenis Data Panel</label>
        <select
          className="text-black bg-white rounded-md px-4 py-2 min-w-[160px] shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={panelType}
          onChange={(e) => setPanelType(e.target.value)}
        >
          <option>Produsen</option>
          <option>Konsumen</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-white font-medium">Pilih Wilayah</label>
        <select
          className="text-black bg-white rounded-md px-4 py-2 min-w-[160px] shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option>Nasional</option>
          <option>Provinsi</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-white font-medium">Kab/Kota</label>
        <input
          type="text"
          disabled
          placeholder="Pilih Kab/Kota"
          className="text-gray-500 bg-gray-200 rounded-md px-4 py-2 min-w-[160px] shadow"
        />
      </div>
      <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-6 py-2 rounded-md shadow">
        Tampilkan
      </button>
    </div>
  );
};

export default FilterSection;
