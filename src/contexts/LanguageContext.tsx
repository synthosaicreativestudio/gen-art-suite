import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'RU' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  RU: {
    // Header
    'header.title': 'SYNTHOS AI',
    
    // Hero
    'hero.title': 'SYNTHOS AI',
    'hero.subtitle': 'AI-студия нового поколения',
    'hero.description': 'Создаём будущее с помощью искусственного интеллекта. От контента до автоматизации — мы превращаем ваши идеи в инновационные решения.',
    'hero.start_project': 'Начать проект',
    'hero.view_services': 'Посмотреть услуги',
    'hero.stat.time': '24ч',
    'hero.stat.time_desc': 'Время выполнения',
    'hero.stat.services': '15+',
    'hero.stat.services_desc': 'AI-сервисов',
    'hero.stat.success': '100%',
    'hero.stat.success_desc': 'Успешных проектов',
    
    // Services
    'services.title': 'Наши AI-услуги',
    'services.description': 'Полный спектр AI-решений для автоматизации и развития вашего бизнеса',
    'services.count.singular': 'услуга',
    'services.count.few': 'услуги', 
    'services.count.many': 'услуг',
    
    // Categories
    'category.ai_content.title': 'AI-контент нового поколения',
    'category.ai_content.description': 'Создание высококачественного контента с помощью ИИ',
    'category.presentations.title': 'Презентации и голосовые решения',
    'category.presentations.description': 'Автоматизация создания презентаций и синтез голоса',
    'category.web_solutions.title': 'Веб-решения на базе AI',
    'category.web_solutions.description': 'Разработка сайтов, приложений и автоматизация процессов',
    'category.analytics.title': 'Аналитика и маркетинг',
    'category.analytics.description': 'ИИ для оптимизации маркетинга и анализа данных',
    'category.assistants.title': 'Виртуальные помощники и ассистенты',
    'category.assistants.description': 'Чат-боты и персональные ИИ-помощники',
    'category.business.title': 'Внутренние бизнес-процессы',
    'category.business.description': 'ИИ для управления персоналом и документооборота',
  },
  EN: {
    // Header
    'header.title': 'SYNTHOS AI',
    
    // Hero
    'hero.title': 'SYNTHOS AI',
    'hero.subtitle': 'Next-generation AI studio',
    'hero.description': 'Creating the future with artificial intelligence. From content to automation — we turn your ideas into innovative solutions.',
    'hero.start_project': 'Start Project',
    'hero.view_services': 'View Services',
    'hero.stat.time': '24h',
    'hero.stat.time_desc': 'Delivery Time',
    'hero.stat.services': '15+',
    'hero.stat.services_desc': 'AI Services',
    'hero.stat.success': '100%',
    'hero.stat.success_desc': 'Successful Projects',
    
    // Services
    'services.title': 'Our AI Services',
    'services.description': 'Complete range of AI solutions for automation and business growth',
    'services.count.singular': 'service',
    'services.count.few': 'services',
    'services.count.many': 'services',
    
    // Categories
    'category.ai_content.title': 'Next-generation AI Content',
    'category.ai_content.description': 'Creating high-quality content using AI',
    'category.presentations.title': 'Presentations and Voice Solutions',
    'category.presentations.description': 'Automated presentation creation and voice synthesis',
    'category.web_solutions.title': 'AI-powered Web Solutions',
    'category.web_solutions.description': 'Website development, applications and process automation',
    'category.analytics.title': 'Analytics and Marketing',
    'category.analytics.description': 'AI for marketing optimization and data analysis',
    'category.assistants.title': 'Virtual Assistants and Helpers',
    'category.assistants.description': 'Chatbots and personal AI assistants',
    'category.business.title': 'Internal Business Processes',
    'category.business.description': 'AI for personnel management and document workflow',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('RU');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['RU']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};