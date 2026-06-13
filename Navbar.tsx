
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container flex items-center justify-between py-5">
        <div className="text-xl font-semibold">Curixgen AI</div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#services">Services</a>
          <a href="#projects">Demo Projects</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-blue-500 px-5 py-3 rounded-xl text-sm font-medium">
          Book Free Demo
        </button>
      </div>
    </header>
  );
}
