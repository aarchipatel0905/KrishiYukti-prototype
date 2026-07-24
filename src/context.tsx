import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from './types';
import { translations } from './data';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  toast: { message: string; type: string; visible: boolean };
  activeTab: string;
  setActiveTab: (tab: string) => void;
  speak: (text: string) => void;
  isSpeaking: boolean;
  stopSpeaking: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [toast, setToast] = useState({ message: '', type: 'info', visible: false });
  const [isSpeaking, setIsSpeaking] = useState(false);

  const t = (key: keyof typeof translations['en']) => {
    // @ts-ignore
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Try to set language based on current lang selection
      const langMap: Record<string, string> = {
        'en': 'en-IN',
        'hi': 'hi-IN',
        'mr': 'mr-IN',
        'gu': 'gu-IN',
        'pa': 'pa-IN'
      };
      utterance.lang = langMap[lang] || 'en-US';
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    } else {
      showToast('Text-to-speech is not supported in this browser.', 'error');
    }
  };

  return (
    <AppContext.Provider value={{ lang, setLang, t, showToast, toast, activeTab, setActiveTab, speak, isSpeaking, stopSpeaking }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
