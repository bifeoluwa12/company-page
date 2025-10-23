export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Get in Touch</h2>
      <form className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 p-3 rounded-md w-full h-32 focus:outline-none focus:border-blue-500 mb-6"
        ></textarea>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
