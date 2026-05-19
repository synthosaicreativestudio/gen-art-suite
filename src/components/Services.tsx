import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Video,
  Image,
  Palette,
  Users,
  User,
  Music,
  Presentation,
  Mic,
  Globe,
  Smartphone,
  Bot,
  BarChart3,
  Database,
  Target,
  Mail,
  MessageCircle,
  Calendar,
  UserCog,
  Building,
  FileStack,
  ClipboardList,
  FileText,
  Play,
  Send,
  FolderOpen,
  ExternalLink,
  Plus,
  Check
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();
  const { items, addItem } = useCart();
  const { toast } = useToast();

  const serviceCategories = [
    {
      title: t('category.ai_content.title'),
      description: t('category.ai_content.description'),
      icon: <Video className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      services: [
        { id: 'ai_video', name: t('service.ai_video.name'), icon: <Video className="w-4 h-4" />, price: 15000 },
        { id: 'ai_photo', name: t('service.ai_photo.name'), icon: <Image className="w-4 h-4" />, price: 3000 },
        { id: 'ai_logo', name: t('service.ai_logo.name'), icon: <Palette className="w-4 h-4" />, price: 8000 },
        { id: 'ai_models', name: t('service.ai_models.name'), icon: <Users className="w-4 h-4" />, price: 12000 },
        { id: 'ai_avatars', name: t('service.ai_avatars.name'), icon: <User className="w-4 h-4" />, price: 25000 },
        { id: 'ai_music', name: t('service.ai_music.name'), icon: <Music className="w-4 h-4" />, price: 7000 },
      ]
    },
    {
      title: t('category.presentations.title'),
      description: t('category.presentations.description'),
      icon: <Presentation className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        { id: 'ai_presentations', name: t('service.ai_presentations.name'), icon: <Presentation className="w-4 h-4" />, price: 10000 },
        { id: 'ai_voice', name: t('service.ai_voice.name'), icon: <Mic className="w-4 h-4" />, price: 5000 },
      ]
    },
    {
      title: t('category.web_solutions.title'),
      description: t('category.web_solutions.description'),
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      services: [
        { id: 'websites', name: t('service.websites.name'), icon: <Globe className="w-4 h-4" />, price: 30000 },
        { id: 'apps', name: t('service.apps.name'), icon: <Smartphone className="w-4 h-4" />, price: 80000 },
        { id: 'automation', name: t('service.automation.name'), icon: <Bot className="w-4 h-4" />, price: 50000 },
      ]
    },
    {
      title: t('category.analytics.title'),
      description: t('category.analytics.description'),
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      services: [
        { id: 'digital_marketing', name: t('service.digital_marketing.name'), icon: <BarChart3 className="w-4 h-4" />, price: 20000 },
        { id: 'data_management', name: t('service.data_management.name'), icon: <Database className="w-4 h-4" />, price: 25000 },
        { id: 'personalization_ai', name: t('service.personalization_ai.name'), icon: <Target className="w-4 h-4" />, price: 35000 },
        { id: 'cold_emails', name: t('service.cold_emails.name'), icon: <Mail className="w-4 h-4" />, price: 10000 },
      ]
    },
    {
      title: t('category.assistants.title'),
      description: t('category.assistants.description'),
      icon: <MessageCircle className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      services: [
        { id: 'chatbots', name: t('service.chatbots.name'), icon: <MessageCircle className="w-4 h-4" />, price: 15000 },
        { id: 'personal_assistants', name: t('service.personal_assistants.name'), icon: <Calendar className="w-4 h-4" />, price: 12000 },
        { id: 'digital_employees', name: t('service.digital_employees.name'), icon: <UserCog className="w-4 h-4" />, price: 30000 },
        { id: 'feedback_analysis', name: t('service.feedback_analysis.name'), icon: <BarChart3 className="w-4 h-4" />, price: 18000 },
      ]
    },
    {
      title: t('category.business.title'),
      description: t('category.business.description'),
      icon: <Building className="w-6 h-6" />,
      gradient: "from-teal-500 to-blue-500",
      services: [
        { id: 'hr_management', name: t('service.hr_management.name'), icon: <UserCog className="w-4 h-4" />, price: 40000 },
        { id: 'document_creation', name: t('service.document_creation.name'), icon: <FileStack className="w-4 h-4" />, price: 15000 },
        { id: 'project_management', name: t('service.project_management.name'), icon: <ClipboardList className="w-4 h-4" />, price: 25000 },
      ]
    }
  ];

  return (
    <section id="services-section" ref={sectionRef} className="scroll-reveal py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {serviceCategories.map((category, index) => (
            <AccordionItem key={index} value={`category-${index}`} className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
              <AccordionTrigger className="hover:no-underline px-6 py-5">
                <div className="flex items-center gap-4 w-full">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.gradient} text-white`}>
                    {category.icon}
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-foreground text-lg">{category.title}</div>
                    <div className="text-sm text-muted-foreground">{category.description}</div>
                  </div>
                  <Badge variant="secondary" className="ml-auto shrink-0">
                    {category.services.length}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-primary">{service.icon}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">{service.name}</span>
                          <span className="text-xs text-muted-foreground">{service.price.toLocaleString('ru-RU')} ₽</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={items.some(i => i.id === service.id) ? "secondary" : "default"}
                        className="h-8 w-8 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity md:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!items.some(i => i.id === service.id)) {
                            addItem({ id: service.id, name: service.name, price: service.price });
                            toast({ title: "Добавлено в корзину", description: service.name });
                          }
                        }}
                      >
                        {items.some(i => i.id === service.id) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Education Section */}
        <div className="mt-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="education" className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
              <AccordionTrigger className="hover:no-underline px-6 py-5">
                <div className="flex items-center gap-4 w-full">
                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-foreground text-lg">{t('education.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('education.description')}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-colors duration-200 group">
                    <Play className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-foreground text-sm">{t('education.youtube')}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 group">
                    <Send className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-foreground text-sm">{t('education.telegram')}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors duration-200 group">
                    <FolderOpen className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-foreground text-sm">{t('education.google')}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Our Works */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] group"
          >
            <FolderOpen className="w-5 h-5" />
            {t('ourWorks')}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;