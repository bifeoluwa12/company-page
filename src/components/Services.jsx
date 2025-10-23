const services = [
  {
    title: "Web Design",
    desc: "We create stunning and user-friendly interfaces that keep visitors engaged.",
  },
  {
    title: "Web Development",
    desc: "We build scalable, fast, and SEO-optimized websites using React and modern tools.",
  },
  {
    title: "Digital Branding",
    desc: "We help your brand stand out with strong visuals and clear digital identity.",
  },
  {
    title: "SEO & Marketing",
    desc: "Boost your visibility with optimized strategies and smart analytics.",
  },
  {
    title: "Maintenance & Support",
    desc: "We provide continuous updates, monitoring, and website care.",
  },
  {
    title: "E-commerce Setup",
    desc: "Launch your online store with secure payment and product management tools.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 text-center px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
