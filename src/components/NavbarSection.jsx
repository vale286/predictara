// src/components/NavbarSection.jsx
const NavbarSection = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-3 py-2 flex justify-between items-center">
        <img src="/logo-bpn.jpg" alt="Logo" className="h-12" />
        <div className="font-bold text-lg">Impactra</div>
        <div className="space-x-4">
          <button className="bg-blue-500 px-3 py-1 rounded-md">About Us</button>
          <button className="bg-blue-700 px-3 py-1 rounded-md">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
