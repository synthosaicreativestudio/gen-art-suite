import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle, PhoneCall } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTA = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="cta-section" ref={sectionRef} className="scroll-reveal py-32 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
          {t('cta.title')}
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('cta.description')}
        </p>

        <Button
          variant="default"
          size="lg"
          className="text-lg px-10 py-6 rounded-full group shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] mb-16"
          onClick={() => window.location.href = 'mailto:synthosaicreativestudio@gmail.com?subject=Начать проект&body=Здравствуйте! Хочу обсудить возможность создания AI-проекта.'}
        >
          {t('cta.start_project')}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Contact info — compact */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>synthosaicreativestudio@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+79829103943</span>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center mt-4 text-sm">
          <a
            href="https://wa.me/79829103943"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-500 hover:text-green-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="https://t.me/+79829103943"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            Telegram
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOLmZXzWH1vefWtpGbKPAwszwoXOy2aVrkFjFNlbXpVuoG0g-0A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-500 hover:text-purple-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            MAX
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;