const testimonials = [
  {
    name: "Babawale Ifeoluwa David",
    role: "CEO, BusWeb",
    message:
      "BusWeb built our company website from scratch and the results were beyond expectations! Fast, clean, and visually stunning.",
    image: "/user1.jpg",
  },
  {
    name: "David Michael",
    role: "Marketing Director, NexaTech",
    message:
      "Our site performance and SEO improved drastically after BusWeb’s redesign. Highly professional team!",
    image: "/user2.jpg",
  },
  {
    name: "Babs Juliet",
    role: "Founder, Bloom Apparel",
    message:
      "They handled our e-commerce launch perfectly — modern design, smooth checkout, and mobile-friendly experience.",
    image: "/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50 text-center px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        What Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-gray-100"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-gray-600 mb-4 italic">“{t.message}”</p>
            <h3 className="text-lg font-semibold text-blue-600">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
