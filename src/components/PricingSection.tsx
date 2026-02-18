import { Check } from "lucide-react";

interface PlanProps {
  icon: string;
  title: string;
  oldPrice: string;
  entryPrice: string;
  monthly: string;
  monthlyLabel?: string;
  benefits: string[];
  bonus?: string;
  cta: string;
}

const plans: PlanProps[] = [
  {
    icon: "🌐",
    title: "Sites, Landing Pages e Apps",
    oldPrice: "R$ 1.499",
    entryPrice: "R$ 599 de entrada",
    monthly: "R$ 199/mês",
    monthlyLabel: "por 12 meses",
    benefits: [
      "Design moderno e exclusivo",
      "Estrutura focada em conversão",
      "Otimização SEO",
      "Performance rápida",
      "Integração com redes sociais",
      "Segurança e proteção",
      "Suporte técnico",
      "Atualizações mensais",
    ],
    bonus: "🔥 DOMÍNIO GRÁTIS POR 1 ANO",
    cta: "Criar Meu Site",
  },
  {
    icon: "🤖",
    title: "Agentes de IA",
    oldPrice: "R$ 5.000",
    entryPrice: "R$ 1.499 de entrada",
    monthly: "R$ 299/mês",
    benefits: [
      "Atendimento automático 24h",
      "Integração WhatsApp",
      "Integração Instagram",
      "Respostas inteligentes",
      "Qualificação automática de leads",
      "Relatórios estratégicos",
      "Aumento de conversão",
      "Redução de custos operacionais",
    ],
    cta: "Criar Meu Agente de IA",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    oldPrice: "",
    entryPrice: "R$ 799 de entrada",
    monthly: "R$ 229/mês",
    benefits: [
      "Loja virtual completa",
      "Integração com gateways",
      "Carrinho otimizado",
      "Gestão de pedidos",
      "Layout premium",
      "Escalabilidade",
      "Segurança de pagamento",
      "Suporte contínuo",
    ],
    cta: "Criar Minha Loja",
  },
];

const PlanCard = ({ plan }: { plan: PlanProps }) => (
  <div className="bg-gradient-card border border-border rounded-2xl p-8 card-hover flex flex-col h-full">
    <div className="text-4xl mb-4">{plan.icon}</div>
    <h3 className="font-display text-xl font-bold text-foreground mb-4">{plan.title}</h3>

    {plan.oldPrice && (
      <p className="text-muted-foreground line-through text-sm mb-1">De {plan.oldPrice}</p>
    )}
    <p className="text-gradient font-bold text-lg mb-1">Por {plan.entryPrice}</p>
    <div className="mb-6">
      <span className="font-display text-3xl font-bold text-foreground">{plan.monthly}</span>
      {plan.monthlyLabel && (
        <span className="text-muted-foreground text-sm ml-2">{plan.monthlyLabel}</span>
      )}
    </div>

    <ul className="space-y-3 mb-6 flex-1">
      {plan.benefits.map((b) => (
        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check size={16} className="text-neon-blue mt-0.5 shrink-0" />
          {b}
        </li>
      ))}
    </ul>

    {plan.bonus && (
      <p className="text-highlight font-bold text-sm mb-6 text-center">{plan.bonus}</p>
    )}

    <a
      href="https://wa.me/98984629959"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-gradient-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity box-glow"
    >
      {plan.cta}
    </a>
  </div>
);

const PricingSection = () => (
  <section id="planos" className="py-24 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px]" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">
        💎 Nossos Planos
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
        Escolha o plano ideal para transformar seu negócio com tecnologia de ponta.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} />
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/nichos"
          className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-muted transition-colors duration-200"
        >
          📂 Ver Nichos Atendidos
        </a>
      </div>
    </div>
  </section>
);

export default PricingSection;
