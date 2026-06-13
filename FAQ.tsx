
export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>

        <div className="space-y-4">
          {[
            "How long does development take?",
            "Do you build custom automation systems?",
            "Can the chatbot connect with CRM systems?"
          ].map((item) => (
            <details key={item} className="glass rounded-2xl p-6">
              <summary className="cursor-pointer font-medium">
                {item}
              </summary>
              <p className="mt-4 text-gray-400">
                Yes. Curixgen AI builds scalable systems tailored to business workflows.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
