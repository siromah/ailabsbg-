export const PROMPTS = [
  { id: 'pr1', title: 'Email sequence automation', cat: 'automation', text: 'Напиши 5-стъпкова email nurture sequence за [продукт/услуга]. Всеки email трябва да е фокусиран върху конкретна болка на клиента. Тон: приятелски и professional. Включи subject lines.', saves: 4 },
  { id: 'pr2', title: 'Instagram caption generator', cat: 'content', text: 'Ти си expert social media copywriter. Напиши 5 Instagram caption варианта за [тема]. Тонът трябва да е [описание]. Включи CTA. Максимум 150 думи.', saves: 7 },
  { id: 'pr3', title: 'Meeting summary builder', cat: 'productivity', text: 'Ти си executive assistant. Ето notes от среща: [notes]. Напиши чист summary с: 1) Основни решения 2) Action items с отговорни и дедлайни 3) Следваща стъпка.', saves: 3 },
  { id: 'pr4', title: 'Customer support response', cat: 'business', text: 'Ти си friendly customer support agent за [компания]. Клиент пише: "[съобщение]". Напиши empathetic отговор, предложи решение, и предложи follow-up. Тон: топъл и professional.', saves: 2 },
  { id: 'pr5', title: 'Blog post outline creator', cat: 'marketing', text: 'Напиши детайлен outline за blog post на тема: [тема]. Включи: compelling hook, 5-7 main sections с подточки, key takeaways и CTA. Target audience: [аудитория].', saves: 3 },
  { id: 'pr6', title: 'Make.com automation plan', cat: 'automation', text: 'Помогни ми да опиша automation workflow за Make.com. Имам [входящи данни] и искам да получа [резултат]. Какви modules трябва да използвам и в какъв ред?', saves: 2 },
  { id: 'pr7', title: 'Cold email outreach', cat: 'sales', text: 'Напиши personalized cold email за [prospect]. Те работят в [индустрия] и имат [проблем]. Нашето решение е [решение]. Email трябва да е кратък (150 думи), без buzzwords, с един clear CTA.', saves: 4 },
  { id: 'pr8', title: 'Competitor analysis', cat: 'business', text: 'Направи анализ на [конкурент]. Включи: техните strengths и weaknesses, positioning, target audience, pricing strategy, и как можем да се диференцираме.', saves: 1 },
  { id: 'pr9', title: 'Daily AI productivity plan', cat: 'productivity', text: 'Помогни ми да планирам деня си с AI. Имам следните задачи: [задачи]. Приоритизирай ги, предложи кои могат да се автоматизират с AI, и създай time-blocked schedule.', saves: 5 },
  { id: 'pr10', title: 'TikTok script writer', cat: 'content', text: 'Напиши TikTok script за видео на тема [тема]. Включи: hook (първите 3 секунди), основно съдържание, и strong ending. Продължителност: [секунди]. Тон: [описание].', saves: 4 },
  { id: 'pr11', title: 'Product description e-commerce', cat: 'marketing', text: 'Напиши compelling product description за [продукт]. Включи: главна headline, 3 key benefits, technical specs, и CTA. Target customer: [описание]. Tone: [tone].', saves: 2 },
  { id: 'pr12', title: 'Meeting agenda creator', cat: 'productivity', text: 'Създай agenda за [вид среща] с [хора] за [продължителност]. Целта на срещата: [цел]. Включи timeboxing за всяка точка и кой е responsible.', saves: 1 },
]

export const CATEGORIES = [
  { id: 'all', label: 'Всички' },
  { id: 'productivity', label: 'Продуктивност' },
  { id: 'marketing', label: 'Маркетинг' },
  { id: 'sales', label: 'Продажби' },
  { id: 'content', label: 'Съдържание' },
  { id: 'business', label: 'Бизнес' },
  { id: 'automation', label: 'Автоматизация' },
]

export const LEARNING_PATHS = [
  {
    id: 'beginner',
    title: 'AI Основи',
    desc: 'Започни от нулата. Разбери как работят ChatGPT, Claude и Gemini. Научи основите на prompt engineering.',
    lessons: 5,
    duration: '90 мин',
    level: 'Начинаещ',
    color: 'from-violet-500 to-fuchsia-500',
    icon: 'Zap',
  },
  {
    id: 'productivity',
    title: 'AI за Продуктивност',
    desc: 'Автоматизирай задачи, планирай дни и създавай системи, които ти спестяват часове всяка седмица.',
    lessons: 4,
    duration: '75 мин',
    level: 'Начинаещ',
    color: 'from-emerald-400 to-teal-500',
    icon: 'Clock',
  },
  {
    id: 'marketing',
    title: 'AI за Маркетинг',
    desc: 'Създавай копи, ads, email campaigns и content calendars с AI. Реални workflows за маркетолози.',
    lessons: 6,
    duration: '120 мин',
    level: 'Среден',
    color: 'from-orange-400 to-rose-500',
    icon: 'TrendingUp',
  },
  {
    id: 'business',
    title: 'AI за Бизнес',
    desc: 'Автоматизирай sales, customer support и вътрешни процеси. Изгради AI stack за твоя бизнес.',
    lessons: 5,
    duration: '110 мин',
    level: 'Среден',
    color: 'from-blue-500 to-indigo-500',
    icon: 'Briefcase',
  },
  {
    id: 'content',
    title: 'AI за Съдържание',
    desc: 'Video scripts, social media, blog posts, repurposing. Пълен content workflow с AI инструменти.',
    lessons: 5,
    duration: '100 мин',
    level: 'Среден',
    color: 'from-pink-400 to-violet-500',
    icon: 'PenTool',
  },
  {
    id: 'automation',
    title: 'Автоматизация без код',
    desc: 'Make.com, Zapier и AI агенти. Свързвай инструменти и създавай workflows, които работят докато ти спиш.',
    lessons: 4,
    duration: '95 мин',
    level: 'Напреднал',
    color: 'from-cyan-400 to-blue-600',
    icon: 'Workflow',
  },
  {
    id: 'freelance',
    title: 'AI за Freelancing',
    desc: 'По-бързи доставки, по-добри предложения, автоматизирани клиентски процеси. Увеличи приходите си.',
    lessons: 4,
    duration: '80 мин',
    level: 'Среден',
    color: 'from-amber-400 to-orange-500',
    icon: 'User',
  },
  {
    id: 'career',
    title: 'AI за Кариера',
    desc: 'CV оптимизация, interview prep, личен бранд, networking. Използвай AI за професионален растеж.',
    lessons: 3,
    duration: '60 мин',
    level: 'Начинаещ',
    color: 'from-lime-400 to-green-500',
    icon: 'Rocket',
  },
]

export const WORKSHOPS = [
  { id: 'w1', title: 'ChatGPT за продуктивност', date: '15 Юни', time: '19:00', duration: '90 мин', level: 'Начинаещ', desc: 'Практически демонстрации как да използваш ChatGPT за ежедневни задачи, планиране и автоматизация.' },
  { id: 'w2', title: 'AI за маркетинг съдържание', date: '22 Юни', time: '19:00', duration: '90 мин', level: 'Среден', desc: 'Създаваме заедно social media копи, email sequences и blog outlines с AI инструменти.' },
  { id: 'w3', title: 'AI за малък бизнес', date: '29 Юни', time: '18:30', duration: '120 мин', level: 'Начинаещ', desc: 'Как да внедриш AI в малък бизнес без технически екип и без голям бюджет.' },
  { id: 'w4', title: 'Автоматизации без код', date: '6 Юли', time: '11:00', duration: '120 мин', level: 'Среден', desc: 'Изграждаме реална automation с Make.com от нула. Свързваме AI с твоите инструменти.' },
  { id: 'w5', title: 'AI за freelancing', date: '13 Юли', time: '19:00', duration: '90 мин', level: 'Среден', desc: 'Ускори доставката на проекти, автоматизирай клиентски процеси и увеличи rates.' },
  { id: 'w6', title: 'AI за personal brand', date: '20 Юли', time: '18:30', duration: '90 мин', level: 'Начинаещ', desc: 'Създай система за личен бранд с AI — content, messaging и visibility.' },
]

export const EVENTS_DATA = [
  { id: 'e1', day: '13', mo: 'Юни', title: 'AI Workflow Q&A', desc: 'Live сесия с нашия екип. Задавай въпроси за workflows, automation и AI tools.', time: '19:00ч', dur: '90 мин', platform: 'Zoom', spots: 20 },
  { id: 'e2', day: '15', mo: 'Юни', title: 'Live: Prompt Engineering с Claude', desc: 'Ще напишем заедно system prompts за различни бизнес use cases.', time: '18:30ч', dur: '60 мин', platform: 'Zoom', spots: 25 },
  { id: 'e3', day: '17', mo: 'Юни', title: 'Make.com Automation Workshop', desc: 'Практическо workshop — изграждаме реална automation от нула.', time: '11:00ч', dur: '120 мин', platform: 'Zoom', spots: 15 },
  { id: 'e4', day: '20', mo: 'Юни', title: 'AI за e-commerce: Office Hours', desc: 'Специализирана сесия за e-commerce бизнеси. Customer support AI, order automation.', time: '17:00ч', dur: '90 мин', platform: 'Zoom', spots: 18 },
  { id: 'e5', day: '22', mo: 'Юни', title: 'Content AI Masterclass', desc: 'Как да изградиш пълна AI content система за social media.', time: '19:00ч', dur: '90 мин', platform: 'Zoom', spots: 30 },
]

export const COMMUNITY_RHYTHM = [
  { day: 'Понеделник', title: 'Нов урок', desc: 'Практически видео урок с конкретен инструмент или техника.', color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
  { day: 'Сряда', title: 'Prompt Drop', desc: 'Нови 3–5 тествани prompts за конкретна индустрия или задача.', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { day: 'Петък', title: 'Live Q&A', desc: 'Задавай въпросите си на живо. Демонстрации и импровизация.', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  { day: 'Уикенд', title: 'Предизвикателство', desc: 'Седмично challenge за упражнение. Споделяй резултатите.', color: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' },
]

export const COMMUNITY_FEATURES = [
  { title: 'Седмични предизвикателства', desc: 'Практически задачи, които те карат да прилагаш наученото веднага.' },
  { title: 'Live workshops', desc: 'Интерактивни сесии с експерти, където изграждаме реални проекти на живо.' },
  { title: 'Office hours', desc: 'Лични сесии за въпроси, review на твои проекти и конкретни казуси.' },
  { title: 'Member wins', desc: 'Споделяме успехи, резултати и case studies от реални членове.' },
  { title: 'Q&A форум', desc: 'Питай по всяко време. Получавай отговори от общността и екипа.' },
  { title: 'Accountability', desc: 'Малки групи за взаимна подкрепа и проследяване на прогреса.' },
]

export const RESOURCES = [
  { title: 'AI Tools Directory', desc: 'Куриран списък с най-добрите AI инструменти за бизнес, маркетинг и продуктивност.', tag: 'Директория' },
  { title: 'Prompt Engineering Guide', desc: 'Пълен наръчник за писане на ефективни prompts. От основи до advanced техники.', tag: 'Гайд' },
  { title: 'Business Automation Checklist', desc: 'Стъпка по стъпка checklist за автоматизиране на повтарящи се бизнес процеси.', tag: 'Чеклист' },
  { title: 'Content Calendar Template', desc: 'Готов AI-powered content calendar за социални мрежи и блог.', tag: 'Шаблон' },
  { title: 'AI Starter Kit', desc: 'Всичко необходимо, за да започнеш с AI днес — инструменти, prompts, workflows.', tag: 'Kit' },
  { title: 'Freelance Proposal Template', desc: 'AI-оптимизиран шаблон за предложения, който увеличава конверсията.', tag: 'Шаблон' },
]

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Стартер',
    price: '0',
    period: 'лв.',
    desc: 'Започни безплатно. Достъп до основни ресурси и общността.',
    features: ['Достъп до общността', '3 безплатни урока', 'Седмичен newsletter', 'Основна prompt библиотека'],
    cta: 'Присъедини се',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '39',
    period: 'лв./месец',
    desc: 'За професионалисти, които работят с AI всеки ден.',
    features: ['Всичко от Стартер', 'Пълен достъп до Академията', 'Всички workshops', 'Пълна prompt библиотека', 'Templates и workflows', 'Приоритетна поддръжка'],
    cta: 'Запази място',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '119',
    period: 'лв./месец',
    desc: 'За екипи и сериозни строители на AI системи.',
    features: ['Всичко от Pro', 'Office hours с експерти', 'Implementation reviews', 'Advanced сесии', 'Priority Q&A', 'Ранен достъп до нови курсове'],
    cta: 'Запази място',
    highlighted: false,
  },
]

export const FAQS = [
  { q: 'За кого е AILABS?', a: 'За всеки, който иска да използва AI по-ефективно в работата си — маркетинг, програмиране, дизайн, предприемачество, фрийланс.' },
  { q: 'Нужни ли са ми технически умения?', a: 'Не. Съдържанието е структурирано така, че да започнеш от нулата и да напредваш стъпка по стъпка.' },
  { q: 'Кога стартирате?', a: 'Първата версия стартира в следващите няколко седмици. Запиши се в листата, за да си сред първите.' },
  { q: 'Ще има ли записи на live сесиите?', a: 'Да, всички Pro и Premium членове получават достъп до записите и материалите завинаги.' },
  { q: 'Мога ли да отменя абонамента си?', a: 'Да, можеш да спреш абонамента по всяко време без скрити такси.' },
  { q: 'Имате ли възстановяване на суми?', a: 'Да, предлагаме 14-дневна гаранция. Ако не си доволен, връщаме парите без въпроси.' },
]

export const NAV_LINKS = [
  { label: 'Начало', href: '/' },
  { label: 'Академия', href: '/academy' },
  { label: 'Общност', href: '/community' },
  { label: 'Prompts', href: '/prompts' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Resources', href: '/resources' },
  { label: 'Цени', href: '/pricing' },
  { label: 'За нас', href: '/about' },
]
