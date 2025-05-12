// src/components/PetaStatusHargaPanganSection.jsx
import React from 'react';

const PetaStatusHargaPanganSection = () => {
  return (
    <section className="bg-blue-100 text-gray-800 py-10 px-4 rounded-md shadow-md mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">PETA STATUS HARGA PANGAN</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <label className="block font-medium">Jenis Data Panel</label>
            <select className="w-full p-2 rounded border border-gray-300">
              <option value="produsen">Produsen</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Pilih Wilayah</label>
            <select className="w-full p-2 rounded border border-gray-300">
              <option value="nasional">Nasional, Bali</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Kab/Kota</label>
            <select className="w-full p-2 rounded border border-gray-300">
              <option value="">Pilih Kab/Kota</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Komoditas</label>
            <select className="w-full p-2 rounded border border-gray-300">
              <option value="luas-panen-padi">Luas Panen Padi</option>
            </select>
          </div>

          <div className="space-y-2 col-span-1 md:col-span-2">
            <label className="block font-medium">Periode Tanggal</label>
            <div className="flex gap-2">
              <input type="date" className="p-2 rounded border border-gray-300 w-full" />
              <input type="date" className="p-2 rounded border border-gray-300 w-full" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Tampilkan
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Tampilkan Peta
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
            Histogram
          </button>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-center text-gray-700 mb-1">
            Peta Harga Beras SPHP di Tingkat Konsumen
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Periode 12-05-2025 Sampai 12-05-2025
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-sm">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="border px-4 py-2">Provinsi</th>
                  <th className="border px-4 py-2">Harga Rata-Rata</th>
                  <th className="border px-4 py-2">Disparitas Terhadap HET%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border px-4 py-2">Nasional</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2" rowSpan="3">Data Final pada jam 13:00 WIB</td>
                </tr>
                <tr className="text-center">
                  <td className="border px-4 py-2">Zona 1</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr className="text-center">
                  <td className="border px-4 py-2">Zona 2</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr className="text-center">
                  <td className="border px-4 py-2">Zona 3</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr className="text-center">
                  <td className="border px-4 py-2">Sumatera - Aceh</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr className="text-center">
                  <td className="border px-4 py-2">Gorontalo</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <h3 className="font-semibold mb-2">Keterangan:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HPP: Harga Pembelian Pemerintah</li>
              <li>HAP: Harga Acuan Pembelian Tingkat Produsen</li>
              <li>(-) Tidak ada panen/tidak ada transaksi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetaStatusHargaPanganSection;
