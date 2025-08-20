import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import heroImage from "@/assets/hero-ai.jpg";
import heroImageLight from "@/assets/hero-ai-light.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const currentHeroImage = theme === 'light' ? heroImageLight : heroImage;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={currentHeroImage} 
          alt="AI Technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 mt-32">
        <div className="animate-float">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 synthos-3d-text">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent leading-tight">
            {t('hero.subtitle')}
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t('hero.stat.time')}</div>
            <div className="text-muted-foreground">{t('hero.stat.time_desc')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t('hero.stat.services')}</div>
            <div className="text-muted-foreground">{t('hero.stat.services_desc')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">{t('hero.stat.success')}</div>
            <div className="text-muted-foreground">{t('hero.stat.success_desc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;