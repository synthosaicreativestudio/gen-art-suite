import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Video, 
  Image, 
  Palette, 
  Users, 
  User, 
  Music, 
  FileText,
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
  ChevronDown,
  Info,
  DollarSign,
  Play,
  Send,
  FolderOpen,
  ExternalLink
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      title: t('category.ai_content.title'),
      description: t('category.ai_content.description'),
      icon: <Video className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      services: [
        {
          key: "ai_video",
          name: t('service.ai_video.name'),
          description: t('service.ai_video.cat_description'),
          icon: <Video className="w-5 h-5" />
        },
        {
          key: "ai_photo",
          name: t('service.ai_photo.name'), 
          description: t('service.ai_photo.cat_description'),
          icon: <Image className="w-5 h-5" />
        },
        {
          key: "ai_logo",
          name: t('service.ai_logo.name'),
          description: t('service.ai_logo.cat_description'),
          icon: <Palette className="w-5 h-5" />
        },
        {
          key: "ai_models",
          name: t('service.ai_models.name'),
          description: t('service.ai_models.cat_description'),
          icon: <Users className="w-5 h-5" />
        },
        {
          key: "ai_avatars",
          name: t('service.ai_avatars.name'),
          description: t('service.ai_avatars.cat_description'),
          icon: <User className="w-5 h-5" />
        },
        {
          key: "ai_music",
          name: t('service.ai_music.name'),
          description: t('service.ai_music.cat_description'),
          icon: <Music className="w-5 h-5" />
        }
      ]
    },
    {
      title: t('category.presentations.title'),
      description: t('category.presentations.description'),
      icon: <Presentation className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        {
          key: "ai_presentations",
          name: t('service.ai_presentations.name'),
          description: t('service.ai_presentations.cat_description'),
          icon: <Presentation className="w-5 h-5" />
        },
        {
          key: "ai_voice",
          name: t('service.ai_voice.name'),
          description: t('service.ai_voice.cat_description'),
          icon: <Mic className="w-5 h-5" />
        }
      ]
    },
    {
      title: t('category.web_solutions.title'),
      description: t('category.web_solutions.description'),
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      services: [
        {
          key: "websites",
          name: t('service.websites.name'),
          description: t('service.websites.cat_description'),
          icon: <Globe className="w-5 h-5" />
        },
        {
          key: "apps",
          name: t('service.apps.name'),
          description: t('service.apps.cat_description'),
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          key: "automation",
          name: t('service.automation.name'),
          description: t('service.automation.cat_description'),
          icon: <Bot className="w-5 h-5" />
        }
      ]
    },
    {
      title: t('category.analytics.title'),
      description: t('category.analytics.description'),
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      services: [
        {
          name: t('service.digital_marketing.name'),
          description: t('service.digital_marketing.description'),
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: t('service.data_management.name'),
          description: t('service.data_management.description'),
          icon: <Database className="w-5 h-5" />
        },
        {
          name: t('service.personalization_ai.name'),
          description: t('service.personalization_ai.description'),
          icon: <Target className="w-5 h-5" />
        },
        {
          name: t('service.cold_emails.name'),
          description: t('service.cold_emails.description'),
          icon: <Mail className="w-5 h-5" />
        }
      ]
    },
    {
      title: t('category.assistants.title'),
      description: t('category.assistants.description'),
      icon: <MessageCircle className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      services: [
        {
          name: t('service.chatbots.name'),
          description: t('service.chatbots.description'),
          icon: <MessageCircle className="w-5 h-5" />
        },
        {
          name: t('service.personal_assistants.name'),
          description: t('service.personal_assistants.description'),
          icon: <Calendar className="w-5 h-5" />
        },
        {
          name: t('service.digital_employees.name'),
          description: t('service.digital_employees.description'),
          icon: <UserCog className="w-5 h-5" />
        },
        {
          name: t('service.feedback_analysis.name'),
          description: t('service.feedback_analysis.description'),
          icon: <BarChart3 className="w-5 h-5" />
        }
      ]
    },
    {
      title: t('category.business.title'),
      description: t('category.business.description'),
      icon: <Building className="w-8 h-8" />,
      gradient: "from-teal-500 to-blue-500",
      services: [
        {
          name: t('service.hr_management.name'),
          description: t('service.hr_management.description'),
          icon: <UserCog className="w-5 h-5" />
        },
        {
          name: t('service.document_creation.name'),
          description: t('service.document_creation.description'),
          icon: <FileStack className="w-5 h-5" />
        },
        {
          name: t('service.project_management.name'),
          description: t('service.project_management.description'),
          icon: <ClipboardList className="w-5 h-5" />
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {serviceCategories.map((category, index) => (
            <AccordionItem key={index} value={`category-${index}`} className="border-border/30">
              <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 overflow-hidden">
                <AccordionTrigger className="hover:no-underline px-0 py-0">
                  <CardHeader className="w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        {category.icon}
                      </div>
                      <div className="text-left flex-1">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {category.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="ml-auto animate-bounce group-hover:animate-pulse">
                        {category.services.length} {category.services.length === 1 ? t('services.count.singular') : category.services.length < 5 ? t('services.count.few') : t('services.count.many')}
                      </Badge>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-0">
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <Collapsible key={serviceIndex}>
                          <div 
                            className="group/service rounded-lg bg-secondary/30 hover:bg-secondary/60 hover:shadow-md transition-all duration-300 border border-border/20 hover:border-primary/20 animate-fade-in overflow-hidden"
                            style={{ animationDelay: `${serviceIndex * 100}ms` }}
                          >
                            <CollapsibleTrigger className="w-full p-4 text-left hover:bg-secondary/40 transition-colors duration-200">
                              <div className="flex items-start gap-3">
                                <div className="text-primary mt-1 group-hover/service:scale-110 group-hover/service:text-accent transition-all duration-300">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-foreground mb-2 group-hover/service:text-primary transition-colors duration-300">
                                      {service.name}
                                    </h4>
                                    <ChevronDown className="w-4 h-4 text-muted-foreground group-hover/service:text-primary transition-all duration-300 data-[state=open]:rotate-180" />
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed group-hover/service:text-foreground/80 transition-colors duration-300">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </CollapsibleTrigger>
                            
                            <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                              <div className="px-4 pb-4 pt-2 border-t border-border/30 bg-background/50">
                                <div className="space-y-4">
                                  <div className="flex items-start gap-2">
                                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-medium text-sm text-foreground mb-1">{t('service.details.description')}</h5>
                                      <p className="text-xs text-muted-foreground leading-relaxed">{t(`service.${service.key}.description`)}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-2">
                                    <Target className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-medium text-sm text-foreground mb-1">{t('service.details.target')}</h5>
                                      <p className="text-xs text-muted-foreground leading-relaxed">{t(`service.${service.key}.target`)}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-2">
                                    <BarChart3 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-medium text-sm text-foreground mb-1">{t('service.details.goals')}</h5>
                                      <p className="text-xs text-muted-foreground leading-relaxed">{t(`service.${service.key}.goals`)}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                                    <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
                                    <div>
                                      <h5 className="font-semibold text-sm text-foreground">{t('service.details.price')}</h5>
                                      <p className="text-sm font-bold text-primary">{t(`service.${service.key}.price`)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </div>
                        </Collapsible>
                      ))}
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Education Section */}
        <div className="mt-16">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="education" className="border-border/30">
              <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 overflow-hidden">
                <AccordionTrigger className="hover:no-underline px-0 py-0">
                  <CardHeader className="w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div className="text-left flex-1">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {t('education.title')}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {t('education.description')}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-0">
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <a
                        href="#"
                        className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group"
                      >
                        <Play className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-semibold text-foreground">{t('education.youtube')}</h4>
                          <ExternalLink className="w-4 h-4 text-muted-foreground mt-1" />
                        </div>
                      </a>

                      <a
                        href="#"
                        className="flex items-center gap-3 p-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                      >
                        <Send className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-semibold text-foreground">{t('education.telegram')}</h4>
                          <ExternalLink className="w-4 h-4 text-muted-foreground mt-1" />
                        </div>
                      </a>

                      <a
                        href="#"
                        className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group"
                      >
                        <FolderOpen className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-semibold text-foreground">{t('education.google')}</h4>
                          <ExternalLink className="w-4 h-4 text-muted-foreground mt-1" />
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Our Works Button */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"
          >
            <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            {t('ourWorks')}
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;