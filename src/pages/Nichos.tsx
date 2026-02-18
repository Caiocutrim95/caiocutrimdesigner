import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check } from "lucide-react";

const nichos = [
  "Advogado", "Arquiteto", "Dentista", "Médico", "Personal Trainer",
  "Restaurante", "Imobiliária", "Clínicas", "Contadores", "Corretores",
  "Academias", "Salão de Beleza", "Pet Shop", "Fotógrafo", "Psicólogo",
  "Nutricionista", "Escola", "Consultoria", "Agência de Viagens", "E muitos outros",
];

const serviceTypes = [
  { label: "Site", price: "R$ 599 + R$ 199/mês" },
  { label: "App", price: "R$ 599 + R$ 199/mês" },
  { label: "IA", price: "R$ 1.499 + R$ 299/mês" },
  { label: "E-commerce", price: "R$ 799 + R$ 229/mês" },
];

const Nichos = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">
          📂 Nichos Atendidos
        </h1>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Atendemos diversos segmentos com soluções personalizadas.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {nichos.map((nicho) => (
            <div
              key={nicho}
              className="bg-gradient-card border border-border rounded-2xl p-6 card-hover"
            >
              <h3 className="font-display font-bold text-foreground mb-4">{nicho}</h3>
              <div className="space-y-2">
                {serviceTypes.map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Check size={14} className="text-neon-blue" />
                      {s.label}
                    </span>
                    <span className="text-foreground text-xs">{s.price}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/98984629959"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-gradient-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Solicitar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Nichos;
