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
    'hero.description': 'Инновационные решения для бизнеса, жизни и развлечений',
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

    // Service Details
    'service.ai_video.name': 'AI-Video',
    'service.ai_video.description': 'Создание видеоконтента — от рекламных роликов до полнометражных фильмов — быстро и качественно. Минимум вашего времени, максимум креатива и эффективности.',
    'service.ai_video.target': 'Рекламным агентствам, маркетологам малого и среднего бизнеса, блогерам и инфлюенсерам, Event-агентствам, частным лицам',
    'service.ai_video.goals': 'Привлечь внимание аудитории, рассказать о товаре/услуге, анонсировать событие эффектно, создать личное видео-поздравление',
    'service.ai_video.price': 'от 15 000 ₽',

    'service.ai_photo.name': 'AI-Photo & Images',
    'service.ai_photo.description': 'Генерация уникальных изображений — от арт-портретов до коммерческих концептов. Быстрое визуальное решение вместо стоковых фотографий.',
    'service.ai_photo.target': 'E-commerce и маркетплейсам, рекламным и digital-агентствам, SMM-специалистам, фотографам, частным клиентам',
    'service.ai_photo.goals': 'Создание визуала продукта без фотосессии, быстрая обработка и оформление фото, генерация авторских иллюстраций, оформление стильных постов и сторис',
    'service.ai_photo.price': 'от 3 000 ₽',

    'service.ai_logo.name': 'AI-Logo',
    'service.ai_logo.description': 'Уникальный логотип и бренд-пакет за 24 часа. Быстрое создание фирменного стиля.',
    'service.ai_logo.target': 'Стартапам и малому бизнесу, рекламным агентствам, личным брендам, Event-организаторам, клубам и сообществам',
    'service.ai_logo.goals': 'Создание запоминающегося фирменного знака, оформление презентаций, визиток, мерча, быстрый редизайн стиля, запуск рекламных кампаний',
    'service.ai_logo.price': 'от 8 000 ₽',

    'service.ai_models.name': 'AI-модели & примерка одежды',
    'service.ai_models.description': 'Виртуальная примерка: цифровые модели вместо реальных съёмок, экономия времени и бюджета.',
    'service.ai_models.target': 'Онлайн-бутикам и брендам одежды, дизайнерам и fashion-стартапам, ритейлерам, Event-агентствам, частным дизайнерам и стилистам',
    'service.ai_models.goals': 'Демонстрация одежды без манекенов, оценка посадки разных фасонов, подготовка презентаций коллекций, снижение затрат на фотосессии',
    'service.ai_models.price': 'от 12 000 ₽',

    'service.ai_avatars.name': 'AI-Avatars',
    'service.ai_avatars.description': 'Создание цифрового двойника — аватара, основанного на вашем образе и голосе. Он может выступать, консультировать, вести трансляции 24/7.',
    'service.ai_avatars.target': 'Лидерам мнений и блогерам, командам продаж, службам поддержки, развлекательным проектам и стримерам, площадкам для событий и вебинаров',
    'service.ai_avatars.goals': 'Проведение вебинаров без камеры, онлайн-консультации 24/7, создание контента без вашего личного участия, интерактивные презентации',
    'service.ai_avatars.price': 'от 25 000 ₽',

    'service.ai_music.name': 'AI-Music',
    'service.ai_music.description': 'Авторская музыка без авторских прав: уникальные треки под ваш стиль всего за несколько часов.',
    'service.ai_music.target': 'Видео-продакшену и режиссёрам, Game-девелоперам и студиям, подкастерам и радио-проектам, рекламным агентствам, событийным организаторам',
    'service.ai_music.goals': 'Создание фоновой музыки, оформление заставок или джинглов, атмосфера мероприятия или приложения',
    'service.ai_music.price': 'от 7 000 ₽',

    'service.ai_presentations.name': 'AI-Presentations',
    'service.ai_presentations.description': 'Стильные презентации за 24 часа — слайды с графикой, анимацией и текстом без PowerPoint-рутины.',
    'service.ai_presentations.target': 'Топ-менеджерам и продажникам, стартапам (инвест-пичи), HR-специалистам (обучение), преподавателям и тренерам, Event-организаторам',
    'service.ai_presentations.goals': 'Убедительный питч для инвесторов, учебные модули и тренинги, отчёты и кейсы, спонсорские материалы',
    'service.ai_presentations.price': 'от 10 000 ₽',

    'service.ai_voice.name': 'AI-Voice Synthesis',
    'service.ai_voice.description': 'Озвучка текста/видео любым голосом — без диктора. Можно использовать различные тембры, интонации, языки.',
    'service.ai_voice.target': 'Подкастерам и блогерам, авторам аудиокниг, создателям обучающих курсов, рекламщикам, службам поддержки',
    'service.ai_voice.goals': 'Запись дикторского текста, голосовые ассистенты, озвучка статей и обучалок, автоответчик в телефонном меню',
    'service.ai_voice.price': 'от 5 000 ₽',

    'service.websites.name': 'Сайты и лендинги',
    'service.websites.description': 'Готовый сайт/лендинг за 5–7 дней — от дизайна до публикации. Подключение домена, хостинга, адаптивная верстка.',
    'service.websites.target': 'Малым и средним бизнесам, фрилансерам (портфолио), продукт-менеджерам, Event-агентствам, стартапам (валидация MVP)',
    'service.websites.goals': 'Запуск продаж или заявок, визитка-сайт, промо-страница акции, тестирование идеи без больших вложений',
    'service.websites.price': 'от 30 000 ₽',

    'service.apps.name': 'Мобильные и веб-приложения',
    'service.apps.description': 'MVP или полноценное приложение «под ключ». AI-ускоренная разработка и тестирование.',
    'service.apps.target': 'Стартапам (гипотезы), E-commerce (каталог), корпоративным клиентам (внутренние решения), сервисным компаниям, Event-проектам',
    'service.apps.goals': 'Быстрый выход на рынок, автоматизация процессов, улучшение UX через приложение, онлайн-бронирование/регистрация',
    'service.apps.price': 'от 80 000 ₽',

    'service.automation.name': 'Автоматизация бизнес-процессов и внедрение AI',
    'service.automation.description': 'Автоматизация рутинных задач и внедрение AI, где это действительно нужно. Обработка заявок, отчёты — всё это AI-алгоритмы возьмут на себя.',
    'service.automation.target': 'Малому и среднему бизнесу, бухгалтерии и HR-отделам',
    'service.automation.goals': 'Снизить рутину и ошибки, сэкономить время сотрудников, повысить эффективность работы ежедневно',
    'service.automation.price': 'от 50 000 ₽',

    // Features
    'features.title': 'Почему выбирают нас',
    'features.description': 'Мы сочетаем передовые AI-технологии с пониманием бизнеса',
    'features.fast_development.title': 'Быстрая разработка',
    'features.fast_development.description': 'Проекты готовы за 24-48 часов благодаря ИИ-автоматизации',
    'features.innovation.title': 'Инновационные технологии',
    'features.innovation.description': 'Используем последние достижения в области искусственного интеллекта',
    'features.quality.title': 'Гарантия качества',
    'features.quality.description': '100% уникальный контент без нарушения авторских прав',
    'features.personalization.title': 'Персонализация',
    'features.personalization.description': 'Каждое решение адаптируется под ваши потребности и бренд',
    
    // CTA
    'cta.title': 'Готовы начать?',
    'cta.description': 'Превратите ваши идеи в реальность с помощью наших AI-решений. Получите консультацию и начните проект уже сегодня.',
    'cta.start_project': 'Начать проект',
    'cta.get_consultation': 'Получить консультацию',

    // Labels
    'service.details.description': 'Описание',
    'service.details.target': 'Для кого подходит',
    'service.details.goals': 'Цели и результат',
    'service.details.price': 'Стоимость',

    // Education
    'education.title': 'Обучение',
    'education.youtube': 'SYNTHOS YouTube',
    'education.telegram': 'SYNTHOS TG',
    'education.google': 'SYNTHOS Google',

    // Our Works
    'ourWorks': 'Наши работы'
  },
  EN: {
    // Header
    'header.title': 'SYNTHOS AI',
    
    // Hero
    'hero.title': 'SYNTHOS AI',
    'hero.subtitle': 'Next-generation AI studio',
    'hero.description': 'Innovative solutions for business, life and entertainment',
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

    // Service Details
    'service.ai_video.name': 'AI-Video',
    'service.ai_video.description': 'Video content creation — from advertising clips to full-length films — fast and high-quality. Minimum time, maximum creativity and efficiency.',
    'service.ai_video.target': 'Advertising agencies, small and medium business marketers, bloggers and influencers, event agencies, private individuals',
    'service.ai_video.goals': 'Attract audience attention, tell about product/service, announce events effectively, create personal video greetings',
    'service.ai_video.price': 'from $200',

    'service.ai_photo.name': 'AI-Photo & Images',
    'service.ai_photo.description': 'Generation of unique images — from art portraits to commercial concepts. Fast visual solution instead of stock photos.',
    'service.ai_photo.target': 'E-commerce and marketplaces, advertising and digital agencies, SMM specialists, photographers, private clients',
    'service.ai_photo.goals': 'Product visuals without photoshoots, fast photo processing, original illustrations, stylish posts and stories',
    'service.ai_photo.price': 'from $40',

    'service.ai_logo.name': 'AI-Logo',
    'service.ai_logo.description': 'Unique logo and brand package in 24 hours. Fast corporate identity creation.',
    'service.ai_logo.target': 'Startups and small businesses, advertising agencies, personal brands, event organizers, clubs and communities',
    'service.ai_logo.goals': 'Memorable brand identity, presentations, business cards, merchandise, quick style redesign, ad campaigns',
    'service.ai_logo.price': 'from $110',

    'service.ai_models.name': 'AI-models & clothing try-on',
    'service.ai_models.description': 'Virtual try-on: digital models instead of real shoots, saving time and budget.',
    'service.ai_models.target': 'Online boutiques and clothing brands, designers and fashion startups, retailers, event agencies, private designers and stylists',
    'service.ai_models.goals': 'Clothing demonstration without mannequins, fit assessment of different styles, collection presentations, reduced photoshoot costs',
    'service.ai_models.price': 'from $160',

    'service.ai_avatars.name': 'AI-Avatars',
    'service.ai_avatars.description': 'Digital twin creation — avatar based on your image and voice. Can present, consult, broadcast 24/7.',
    'service.ai_avatars.target': 'Opinion leaders and bloggers, sales teams, support services, entertainment projects and streamers, event and webinar platforms',
    'service.ai_avatars.goals': 'Webinars without camera, 24/7 online consultations, content creation without personal participation, interactive presentations',
    'service.ai_avatars.price': 'from $330',

    'service.ai_music.name': 'AI-Music',
    'service.ai_music.description': 'Original music without copyrights: unique tracks in your style in just a few hours.',
    'service.ai_music.target': 'Video production and directors, game developers and studios, podcasters and radio projects, advertising agencies, event organizers',
    'service.ai_music.goals': 'Background music creation, intro/jingle design, event or app atmosphere',
    'service.ai_music.price': 'from $95',

    'service.ai_presentations.name': 'AI-Presentations',
    'service.ai_presentations.description': 'Stylish presentations in 24 hours — slides with graphics, animation and text without PowerPoint routine.',
    'service.ai_presentations.target': 'Top managers and salespeople, startups (investor pitches), HR specialists (training), teachers and trainers, event organizers',
    'service.ai_presentations.goals': 'Convincing investor pitch, training modules, reports and cases, sponsorship materials',
    'service.ai_presentations.price': 'from $135',

    'service.ai_voice.name': 'AI-Voice Synthesis',
    'service.ai_voice.description': 'Text/video voiceover with any voice — no narrator needed. Various timbres, intonations, languages available.',
    'service.ai_voice.target': 'Podcasters and bloggers, audiobook authors, online course creators, advertisers, support services',
    'service.ai_voice.goals': 'Narrator text recording, voice assistants, article and tutorial voiceover, phone menu auto-responder',
    'service.ai_voice.price': 'from $65',

    'service.websites.name': 'Websites and Landing Pages',
    'service.websites.description': 'Ready website/landing in 5-7 days — from design to publication. Domain, hosting connection, responsive layout.',
    'service.websites.target': 'Small and medium businesses, freelancers (portfolio), product managers, event agencies, startups (MVP validation)',
    'service.websites.goals': 'Sales or leads launch, business card website, promotion page, idea testing without big investments',
    'service.websites.price': 'from $400',

    'service.apps.name': 'Mobile and Web Applications',
    'service.apps.description': 'MVP or full-featured turnkey application. AI-accelerated development and testing.',
    'service.apps.target': 'Startups (hypotheses), e-commerce (catalog), corporate clients (internal solutions), service companies, event projects',
    'service.apps.goals': 'Fast market entry, process automation, UX improvement through app, online booking/registration',
    'service.apps.price': 'from $1070',

    'service.automation.name': 'Business Process Automation and AI Implementation',
    'service.automation.description': 'Routine task automation and AI implementation where really needed. Request processing, reports — AI algorithms will handle it all.',
    'service.automation.target': 'Small and medium businesses, accounting and HR departments',
    'service.automation.goals': 'Reduce routine and errors, save employee time, increase daily work efficiency',
    'service.automation.price': 'from $670',

    // Features
    'features.title': 'Why Choose Us',
    'features.description': 'We combine cutting-edge AI technologies with business understanding',
    'features.fast_development.title': 'Fast Development',
    'features.fast_development.description': 'Projects ready in 24-48 hours thanks to AI automation',
    'features.innovation.title': 'Innovative Technologies',
    'features.innovation.description': 'Using the latest achievements in artificial intelligence',
    'features.quality.title': 'Quality Guarantee',
    'features.quality.description': '100% unique content without copyright infringement',
    'features.personalization.title': 'Personalization',
    'features.personalization.description': 'Each solution is adapted to your needs and brand',
    
    // CTA
    'cta.title': 'Ready to start?',
    'cta.description': 'Turn your ideas into reality with our AI solutions. Get consultation and start your project today.',
    'cta.start_project': 'Start Project',
    'cta.get_consultation': 'Get Consultation',

    // Labels
    'service.details.description': 'Description',
    'service.details.target': 'Target Audience',
    'service.details.goals': 'Goals and Results',
    'service.details.price': 'Price',

    // Education
    'education.title': 'Training',
    'education.youtube': 'SYNTHOS YouTube',
    'education.telegram': 'SYNTHOS TG',
    'education.google': 'SYNTHOS Google',

    // Our Works
    'ourWorks': 'Our Works'
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