import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/98984629959"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    aria-label="Contato WhatsApp"
  >
    <MessageCircle size={22} className="group-hover:animate-bounce" />
    <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
