import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer id="contato" className="border-t border-border py-12">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-display text-2xl font-bold text-gradient mb-6 animate-glow-pulse">
        CAIO CUTRIM
      </h3>
      <p className="text-muted-foreground mb-6">
        Transformando ideias em soluções digitais de alto impacto.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://wa.me/98984629959"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-muted hover:bg-border text-foreground px-5 py-3 rounded-xl transition-colors"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/caioiakal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-muted hover:bg-border text-foreground px-5 py-3 rounded-xl transition-colors"
        >
          <Instagram size={18} />
          Instagram
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Caio Cutrim © 2026 — Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
