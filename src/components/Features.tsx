import { Clock, Zap, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const Features = () => {
  const { t } = useLanguage();
  const gridRef = useStaggerReveal<HTMLDivElement>({ staggerDelay: 120 });

  const features = [
    {
      icon: <Clock className="w-7 h-7" />,
      title: t('features.fast_development.title'),
      description: t('features.fast_development.description'),
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: t('features.innovation.title'),
      description: t('features.innovation.description'),
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: t('features.quality.title'),
      description: t('features.quality.description'),
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: t('features.personalization.title'),
      description: t('features.personalization.description'),
    }
  ];

  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="stagger-item group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;