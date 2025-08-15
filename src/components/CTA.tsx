import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10" />
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-60" />
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              Готовы начать?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Превратите ваши идеи в реальность с помощью наших AI-решений. 
              Получите консультацию и начните проект уже сегодня.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 group">
                Начать проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Получить консультацию
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@ai-studio.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;