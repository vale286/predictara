// src/components/Header.jsx
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="/logo-bpn.jpg" alt="Logo" className="h-12" />
      <div className="space-x-4">
        <button className="bg-red-500 px-4 py-1 rounded-md">Tentang kami</button>
        <button className="bg-blue-600 px-4 py-1 rounded-md">Tutorial Video</button>
      </div>
    </div>
  );
};

export default Header;
