export default function About() {
  return (
    <section id="about" className="py-20 px-8 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="/office.jpg"
          alt="Our Office"
          className="w-full md:w-1/2 h-56 md:h-80 object-cover rounded-lg shadow-lg"
        />

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            At <strong>BusWeb</strong>, we’re dedicated to helping businesses
            grow online through innovative and user-centered web solutions. Our
            team combines design and technology to deliver results that make
            your brand shine.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
