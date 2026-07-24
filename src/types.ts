export type Language = 'en' | 'hi' | 'gu' | 'mr' | 'pa';

export interface Advisory {
  type: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  confidence: 'High' | 'Medium' | 'Low';
  icon: string;
}

export interface MandiPrice {
  market: string;
  distance: number;
  price: number;
  transport: number;
  storage: number;
  net: number;
  action: string;
  recommendation?: boolean;
}

export interface NewsArticle {
  title: string;
  category: string;
  summary: string;
  date: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  image: string;
}

export interface ChartDataPoint {
  day: number;
  quality: number;
}
