export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-50">
          Empower Your Business with{" "}
          <span className="text-blue-400">BusWeb</span>
        </h1>
        <p className="text-gray-200 mb-6 text-lg">
          We build high-performing, responsive, and SEO-optimized websites for
          modern businesses.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-blue-400 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
      <img
        src="/logo.png"
        alt="Business illustration"
        className="hidden md:block w-[400px] rounded-lg shadow-lg"
      />
    </section>
  );
}
