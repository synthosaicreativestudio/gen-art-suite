import { Clock, Zap, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import featureSpeed from "@/assets/feature-speed.png";
import featureInnovation from "@/assets/feature-innovation.png";
import featureQuality from "@/assets/ai-quality.jpg";
import featurePersonalization from "@/assets/ai-personalization-new.jpg";

const Features = () => {
  const { t } = useLanguage();
  const gridRef = useStaggerReveal<HTMLDivElement>({ staggerDelay: 150 });

  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: t('features.fast_development.title'),
      description: t('features.fast_development.description'),
      image: featureSpeed,
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t('features.innovation.title'),
      description: t('features.innovation.description'),
      image: featureInnovation,
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('features.quality.title'),
      description: t('features.quality.description'),
      image: featureQuality,
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: t('features.personalization.title'),
      description: t('features.personalization.description'),
      image: featurePersonalization,
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

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="stagger-item group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/90" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary border border-border/50">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;