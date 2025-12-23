export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 shadow-md backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">BusWeb</h1>
      <ul className="hidden md:flex space-x-6 font-medium">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Get Started
      </button>
    </nav>
  );
}
