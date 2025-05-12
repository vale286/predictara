import { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [commodity, setCommodity] = useState("");
  const [market, setMarket] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(commodity, market);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md mb-6 text-black">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Komoditas"
          value={commodity}
          onChange={(e) => setCommodity(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Pasar"
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Prediksi
      </button>
    </form>
  );
};

export default InputForm;
