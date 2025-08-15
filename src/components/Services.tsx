import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  ClipboardList
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "AI-контент нового поколения",
      description: "Создание высококачественного контента с помощью ИИ",
      icon: <Video className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI-Video",
          description: "Создание видеороликов любой сложности — от короткой рекламы до полноценных фильмов",
          icon: <Video className="w-5 h-5" />
        },
        {
          name: "AI-Photo & Images", 
          description: "Разработка уникальных визуальных материалов без фотосессий",
          icon: <Image className="w-5 h-5" />
        },
        {
          name: "AI-Logo",
          description: "Быстрое создание уникального дизайна логотипа и полного бренд-пакета за 24 часа",
          icon: <Palette className="w-5 h-5" />
        },
        {
          name: "AI-модели & примерка одежды",
          description: "Реалистичные цифровые модели и виртуальная примерка одежды",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "AI-Avatars",
          description: "Создание цифрового аватара на основе вашего образа и голоса",
          icon: <User className="w-5 h-5" />
        },
        {
          name: "AI-Music",
          description: "Генерация авторских музыкальных композиций под заданный стиль и настроение",
          icon: <Music className="w-5 h-5" />
        },
        {
          name: "AI-копирайтинг",
          description: "Создание SEO-оптимизированного текстового контента",
          icon: <FileText className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Презентации и голосовые решения",
      description: "Автоматизация создания презентаций и синтез голоса",
      icon: <Presentation className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI-Presentations",
          description: "Автоматическое создание стильных презентаций с графикой и анимацией",
          icon: <Presentation className="w-5 h-5" />
        },
        {
          name: "AI-Voice Synthesis",
          description: "Синтез голоса для озвучивания любого текста или видео",
          icon: <Mic className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Веб-решения на базе AI",
      description: "Разработка сайтов, приложений и автоматизация процессов",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Сайты и лендинги",
          description: "Разработка сайтов «под ключ» с современным дизайном за 5–7 дней",
          icon: <Globe className="w-5 h-5" />
        },
        {
          name: "Мобильные и веб-приложения",
          description: "Разработка MVP и готовых приложений с функциями ИИ",
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          name: "Автоматизация бизнес-процессов",
          description: "Автоматизация рутинных операций и управления CRM",
          icon: <Bot className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Аналитика и маркетинг",
      description: "ИИ для оптимизации маркетинга и анализа данных",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      services: [
        {
          name: "Digital-маркетинг и AI-аналитика",
          description: "Оптимизация рекламных кампаний и прогнозирование трендов",
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: "ИИ для управления базами данных",
          description: "Автоматизация очистки, структурирования и интеграции данных",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "ИИ для персонализации",
          description: "Создание индивидуальных рекомендаций для каждого клиента",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "ИИ для генерации холодных писем",
          description: "Автоматическое создание персонализированных писем",
          icon: <Mail className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Виртуальные помощники и ассистенты",
      description: "Чат-боты и персональные ИИ-помощники",
      icon: <MessageCircle className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "Чат-боты",
          description: "Круглосуточная поддержка клиентов и автоматизация продаж",
          icon: <MessageCircle className="w-5 h-5" />
        },
        {
          name: "Персональные ассистенты",
          description: "ИИ для планирования задач и управления календарём",
          icon: <Calendar className="w-5 h-5" />
        },
        {
          name: "Цифровые сотрудники",
          description: "Виртуальная рабочая сила для рутинных задач",
          icon: <UserCog className="w-5 h-5" />
        },
        {
          name: "ИИ для анализа обратной связи",
          description: "Анализ отзывов клиентов для выявления проблем",
          icon: <BarChart3 className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Внутренние бизнес-процессы",
      description: "ИИ для управления персоналом и документооборота",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-teal-500 to-blue-500",
      services: [
        {
          name: "ИИ для управления персоналом",
          description: "Автоматический скрининг резюме и оценка эффективности",
          icon: <UserCog className="w-5 h-5" />
        },
        {
          name: "ИИ-помощники для создания документов",
          description: "Автоматическое составление отчётов и презентаций",
          icon: <FileStack className="w-5 h-5" />
        },
        {
          name: "ИИ для управления проектами",
          description: "Прогнозирование рисков и оптимизация ресурсов",
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
            Наши AI-услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр AI-решений для автоматизации и развития вашего бизнеса
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {serviceCategories.map((category, index) => (
            <AccordionItem key={index} value={`category-${index}`} className="border-border/30">
              <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 overflow-hidden">
                <AccordionTrigger className="hover:no-underline px-0 py-0">
                  <CardHeader className="w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 group-hover:scale-110`}>
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
                        {category.services.length} услуг
                      </Badge>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-0">
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex} 
                          className="group/service flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 hover:shadow-md transition-all duration-300 border border-border/20 hover:border-primary/20 hover:scale-[1.02] animate-fade-in"
                          style={{ animationDelay: `${serviceIndex * 100}ms` }}
                        >
                          <div className="text-primary mt-1 group-hover/service:scale-110 group-hover/service:text-accent transition-all duration-300">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-2 group-hover/service:text-primary transition-colors duration-300">
                              {service.name}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed group-hover/service:text-foreground/80 transition-colors duration-300">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;