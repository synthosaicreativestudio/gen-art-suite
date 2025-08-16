import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Shield, Sparkles } from "lucide-react";
import aiVideoImage from "@/assets/ai-video.jpg";
import aiPersonalizationImage from "@/assets/ai-personalization-new.jpg";
import aiAssistantImage from "@/assets/ai-assistant.jpg";

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Быстрая разработка",
      description: "Проекты готовы за 24-48 часов благодаря ИИ-автоматизации",
      image: aiVideoImage
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Инновационные технологии",  
      description: "Используем последние достижения в области искусственного интеллекта",
      image: aiPersonalizationImage
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Гарантия качества",
      description: "100% уникальный контент без нарушения авторских прав",
      image: aiAssistantImage
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Персонализация", 
      description: "Каждое решение адаптируется под ваши потребности и бренд",
      image: aiPersonalizationImage
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы сочетаем передовые AI-технологии с пониманием бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white">
                  {feature.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;