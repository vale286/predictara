import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold">Sistem Informasi Harga Pangan</h3>
          <p className="text-sm">© {new Date().getFullYear()} Impactra Team. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Beranda</a>
          <a href="#" className="text-sm hover:underline">Tentang</a>
          <a href="#" className="text-sm hover:underline">Kontak</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
