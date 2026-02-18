import { useState, useEffect, useCallback } from "react";
import slideApps from "@/assets/slide-apps.jpg";
import slideSites from "@/assets/slide-sites.jpg";
import slideIa from "@/assets/slide-ia.jpg";
import slideEcommerce from "@/assets/slide-ecommerce.jpg";

const slides = [
  {
    title: "Apps Profissionais",
    text: "Criamos aplicativos modernos, rápidos e prontos para escalar seu negócio.",
    image: slideApps,
  },
  {
    title: "Sites e Landing Pages",
    text: "Estruturas otimizadas para conversão e vendas automáticas.",
    image: slideSites,
  },
  {
    title: "Agentes de IA",
    text: "Atendimento 24h, vendas automáticas e integração com WhatsApp.",
    image: slideIa,
  },
  {
    title: "E-commerce",
    text: "Loja virtual completa, pagamentos integrados e automação total.",
    image: slideEcommerce,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-400 ${
            isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {slide.text}
          </p>
          <a
            href="https://wa.me/98984629959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity box-glow-strong"
          >
            👉 Solicitar Agora
          </a>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-gradient-primary w-8 box-glow"
                  : "bg-muted hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
