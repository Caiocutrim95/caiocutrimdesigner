import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Nichos", href: "/nichos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="CAIO CUTRIM"
            className="h-14 w-14 object-contain drop-shadow-[0_0_10px_hsl(210_100%_60%/0.4)]"
            style={{ mixBlendMode: "screen" }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/98984629959"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity duration-200 box-glow"
          >
            <Rocket size={16} />
            Começar Projeto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 animate-slide-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors border-b border-border"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/98984629959"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold"
          >
            🚀 Começar Projeto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
