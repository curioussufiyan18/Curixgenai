const demos = [
  "Cleaning Company Demo",
  "Umrah/Hajj Travel Agency Demo",
  "Dental Clinic Demo"
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="text-4xl font-bold mb-14">Demo Projects</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <a
              key={demo}
              href="#"
              className="glass rounded-3xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="h-56 bg-gradient-to-br from-blue-500/20 to-cyan-400/10" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{demo}</h3>
                <p className="text-gray-400 mt-2">
                  Interactive premium business website demo.
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

