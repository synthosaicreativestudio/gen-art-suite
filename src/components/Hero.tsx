import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroDark from "@/assets/hero-panorama-dark.png";
import heroLight from "@/assets/hero-panorama-light.png";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const heroImage = theme === 'light' ? heroLight : heroDark;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="hero-enter text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent leading-[1.1]">
          {t('hero.title')}
        </h1>

        <p className="hero-enter-delay text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="hero-enter-delay-2">
          <Button
            variant="default"
            size="lg"
            className="text-lg px-10 py-6 rounded-full group shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
            onClick={() => {
              const el = document.getElementById('services-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('cta.start_project')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;