const services = [
  "Website Development",
  "AI Chatbots",
  "Automation Systems",
  "Appointment Booking",
  "Custom Business Solutions"
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <h2 className="text-4xl font-bold mb-14">
          Modern Systems for Modern Businesses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="glass rounded-3xl p-8 hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 mb-6" />
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-400">
                Premium AI-powered systems built for scalability and modern user experiences.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

