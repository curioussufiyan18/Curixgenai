export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-12">
      <div className="container flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Curixgen AI</h3>
          <p className="text-gray-400 mt-3">
            AI automation and modern business systems.
          </p>
        </div>

        <div className="space-y-2 text-gray-400">
          <p>WhatsApp</p>
          <p>Email</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
}

