import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-yellow-950 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-yellow-600 font-bold text-xl hover:text-white">
          M.M
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-bold">
          <a href="#about" className="hover:text-yellow-600">About</a>
          <a href="#skills" className="hover:text-yellow-600">Skills</a>
          <a href="#experience" className="hover:text-yellow-600">Experience</a>
          <a href="#education" className="hover:text-yellow-600">Education</a>
          <a href="#certifications" className="hover:text-yellow-600">Certifications</a>
          <a href="#projects" className="hover:text-yellow-600">Projects</a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={17} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-yellow-950 text-white font-bold transition-all duration-300 overflow-hidden w-full fixed top-16 left-0 z-40 ${
          open ? "max-h-screen py-4 flex flex-col gap-4 px-4" : "max-h-0"
        }`}
      >
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#education" onClick={() => setOpen(false)}>Education</a>
        <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
      </div>
    </nav>
  );
}
