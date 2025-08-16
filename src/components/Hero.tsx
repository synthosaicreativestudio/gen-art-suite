import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
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
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-float">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "hsl(20, 100%, 55%)" }}>
            SYNTHOS AI
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent leading-tight">
            AI-студия нового поколения
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Создаём будущее с помощью искусственного интеллекта. 
          От контента до автоматизации — мы превращаем ваши идеи в инновационные решения.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => {
              const ctaSection = document.querySelector('#cta-section');
              ctaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начать проект
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Посмотреть услуги
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24ч</div>
            <div className="text-muted-foreground">Время выполнения</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">AI-сервисов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">∞</div>
            <div className="text-muted-foreground">Возможностей</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;