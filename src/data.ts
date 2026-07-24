import { Advisory, MandiPrice, NewsArticle, TeamMember, ChartDataPoint } from './types';

export const mockAdvisories: Advisory[] = [
  {
    type: 'Irrigation',
    title: 'Water field on Day 2',
    description: 'Heat wave expected. Prevent soil moisture loss by watering early morning.',
    priority: 'High',
    confidence: 'High',
    icon: 'Droplets'
  },
  {
    type: 'Fertilizer',
    title: 'Apply Nitrogen on Day 4',
    description: 'Optimal soil temperature and post-rain moisture makes it ideal for top dressing.',
    priority: 'Medium',
    confidence: 'Medium',
    icon: 'Sprout'
  },
  {
    type: 'Pest Alert',
    title: 'High humidity detected',
    description: 'Watch for early signs of leaf spots or blight. Preventive spray recommended.',
    priority: 'High',
    confidence: 'High',
    icon: 'Bug'
  }
];

export const mockMandiPrices: MandiPrice[] = [
  { market: 'Village Mandi (Local)', distance: 5, price: 1400, transport: 50, storage: 10, net: 1340, action: 'SELL NOW' },
  { market: 'District Hub', distance: 25, price: 1550, transport: 150, storage: 20, net: 1380, action: 'STORE IN COLD STORAGE' },
  { market: 'Regional City Market', distance: 80, price: 1750, transport: 350, storage: 50, net: 1350, action: 'TRANSPORT TO DISTRICT HUB' },
  { market: 'State Capital Mandi', distance: 250, price: 2100, transport: 900, storage: 100, net: 1100, action: 'NOT RECOMMENDED' },
  { market: 'Inter-State Processing Center', distance: 400, price: 2400, transport: 1500, storage: 200, net: 700, action: 'NOT RECOMMENDED' }
];

export const mockNews: NewsArticle[] = [
  {
    title: '50% Cold Storage Subsidy',
    category: 'Government Scheme',
    summary: 'Farmers eligible for up to 50% subsidy on building local cold storage facilities under new NABARD scheme.',
    date: '2 Days Ago',
    image: 'https://images.unsplash.com/photo-1595804369062-881515bb552b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'New MSP Announced for Wheat',
    category: 'Market Update',
    summary: 'The government has increased the Minimum Support Price for the upcoming Rabi season to support farmers.',
    date: '5 Days Ago',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Organic Farming Mission 2026',
    category: 'Policy',
    summary: 'Free certification and initial seed kits available for farmers transitioning to 100% organic practices.',
    date: '1 Week Ago',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800'
  }
];

export const mockTeam: TeamMember[] = [
  {
    name: 'Divya Chauhan',
    role: 'Lead AI Engineer',
    bio: 'Specializes in computer vision algorithms for real-time crop disease classification and deep learning pipelines.',
    github: '#',
    linkedin: '#',
    email: 'divya@example.com',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Durva Patel',
    role: 'AgTech Product Designer',
    bio: 'Passionate about accessible UI/UX, vernacular voice navigation, and intuitive product design for rural communities.',
    github: '#',
    linkedin: '#',
    email: 'durva@example.com',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Aarchi Patel',
    role: 'Data Scientist',
    bio: 'Builds predictive models for mandi market price trends, crop spoilage velocity, and net return optimizations.',
    github: '#',
    linkedin: '#',
    email: 'aarchi@example.com',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Srushti Dadhania',
    role: 'Full Stack Developer',
    bio: 'Engineers real-time API integrations, speech synthesis webhooks, and scalable backend services.',
    github: '#',
    linkedin: '#',
    email: 'srushti@example.com',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dhyanvi Makwana',
    role: 'Agronomic Researcher',
    bio: 'Researches regional crop disease diagnostics, weather impact calendars, and field testing strategies.',
    github: '#',
    linkedin: '#',
    email: 'dhyanvi@example.com',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
  }
];

export const mockChartData: ChartDataPoint[] = [
  { day: 0, quality: 100 },
  { day: 1, quality: 98 },
  { day: 2, quality: 95 },
  { day: 3, quality: 85 },
  { day: 4, quality: 70 },
  { day: 5, quality: 50 },
  { day: 6, quality: 30 },
  { day: 7, quality: 15 }
];

export const translations = {
  en: {
    heroTitle: 'Smarter Farming. Higher Yield. Lower Loss.',
    heroSub: 'In Their Own Language. On Their Own Phone. For Their Own Future.',
    advisory: 'Precision Advisory',
    planner: 'Post-Harvest Planner',
    news: 'Farmer News',
    about: 'About Us',
    help: 'Help / Contact',
    startAdvisory: 'Start Advisory',
    explorePlanner: 'Explore Planner'
  },
  hi: {
    heroTitle: 'स्मार्ट खेती। अधिक उपज। कम नुकसान।',
    heroSub: 'अपनी भाषा में। अपने फोन पर। अपने भविष्य के लिए।',
    advisory: 'सटीक सलाह',
    planner: 'फसल योजनाकार',
    news: 'किसान समाचार',
    about: 'हमारे बारे में',
    help: 'मदद / संपर्क',
    startAdvisory: 'सलाह शुरू करें',
    explorePlanner: 'योजनाकार खोजें'
  },
  gu: {
    heroTitle: 'સ્માર્ટ ખેતી. વધુ ઉપજ. ઓછું નુકસાન.',
    heroSub: 'પોતાની ભાષામાં. પોતાના ફોન પર. પોતાના ભવિષ્ય માટે.',
    advisory: 'ચોક્કસ સલાહ',
    planner: 'પાક આયોજક',
    news: 'ખેડૂત સમાચાર',
    about: 'અમારા વિશે',
    help: 'મદદ / સંપર્ક',
    startAdvisory: 'સલાહ શરૂ કરો',
    explorePlanner: 'આયોજક શોધો'
  },
  mr: {
    heroTitle: 'स्मार्ट शेती. जास्त उत्पन्न. कमी नुकसान.',
    heroSub: 'स्वतःच्या भाषेत. स्वतःच्या फोनवर. स्वतःच्या भविष्यासाठी.',
    advisory: 'अचूक सल्ला',
    planner: 'पीक नियोजक',
    news: 'शेतकरी बातम्या',
    about: 'आमच्याबद्दल',
    help: 'मदत / संपर्क',
    startAdvisory: 'सल्ला सुरू करा',
    explorePlanner: 'नियोजक एक्सप्लोर करा'
  },
  pa: {
    heroTitle: 'ਸਮਾਰਟ ਖੇਤੀ. ਵੱਧ ਝਾੜ. ਘੱਟ ਨੁਕਸਾਨ.',
    heroSub: 'ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ. ਆਪਣੇ ਫ਼ੋਨ ਤੇ. ਆਪਣੇ ਭਵਿੱਖ ਲਈ.',
    advisory: 'ਸਟੀਕ ਸਲਾਹ',
    planner: 'ਫਸਲ ਯੋਜਨਾਕਾਰ',
    news: 'ਕਿਸਾਨ ਖਬਰਾਂ',
    about: 'ਸਾਡੇ ਬਾਰੇ',
    help: 'ਮਦਦ / ਸੰਪਰਕ',
    startAdvisory: 'ਸਲਾਹ ਸ਼ੁਰੂ ਕਰੋ',
    explorePlanner: 'ਯੋਜਨਾਕਾਰ ਖੋਜੋ'
  }
};
