import { Globe, Smartphone, Bot, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: <Globe className="text-neon-blue" size={32} />,
    title: "Sites & Landing Pages",
    desc: "Páginas modernas, responsivas e otimizadas para conversão e SEO.",
  },
  {
    icon: <Smartphone className="text-neon-purple" size={32} />,
    title: "Aplicativos",
    desc: "Apps profissionais, escaláveis e com design premium para seu negócio.",
  },
  {
    icon: <Bot className="text-neon-blue" size={32} />,
    title: "Agentes de IA",
    desc: "Automação inteligente com WhatsApp, Instagram e atendimento 24h.",
  },
  {
    icon: <ShoppingCart className="text-neon-purple" size={32} />,
    title: "E-commerce",
    desc: "Loja virtual completa com pagamentos integrados e automação total.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">
        Nossos Serviços
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
        Soluções completas em tecnologia para impulsionar seu negócio.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-gradient-card border border-border rounded-2xl p-6 card-hover text-center"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
