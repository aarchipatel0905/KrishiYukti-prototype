import { useState } from 'react';
import { useAppContext } from '../context';
import { Mic, Globe, ChevronDown, Volume2, Square } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Logo } from './Logo';

export function Header() {
  const { lang, setLang, t, showToast, activeTab, setActiveTab, isSpeaking, stopSpeaking } = useAppContext();
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' }, // Added Home
    { id: 'advisory', label: t('advisory') },
    { id: 'planner', label: t('planner') },
    { id: 'news', label: t('news') },
    { id: 'about', label: t('about') },
    { id: 'contact', label: t('help') } // Changed id from 'help' to 'contact'
  ];

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <Logo />
        <span className="text-xl font-bold tracking-tight text-[#0D2818] hidden sm:block">KrishiYukti</span>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-500">
        {navLinks.map((link) => (
          <button 
            key={link.id} 
            onClick={() => { setActiveTab(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={activeTab === link.id ? "text-[#1b4332] font-semibold border-b-2 border-[#1b4332]" : "hover:text-[#1b4332] transition-colors"}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Accessibility Capsule */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => {
            if (isSpeaking) {
              stopSpeaking();
            } else {
              showToast('Click the read aloud button on any card to hear it.', 'info');
            }
          }}
          className={`relative p-2 rounded-full flex items-center justify-center transition-all ${isSpeaking ? 'bg-green-500 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
          aria-label="Toggle Speech"
        >
          {isSpeaking ? <Square className="w-5 h-5" fill="currentColor" /> : <Volume2 className="w-5 h-5" />}
          {isSpeaking && (
            <motion.span 
              className="absolute inset-0 rounded-full border-2 border-green-500"
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </button>
        
        <div className="relative">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 gap-2 border border-gray-200 cursor-pointer" onClick={() => setLangOpen(!langOpen)}>
            <button className="p-1 hover:bg-white rounded-full transition-colors hidden sm:block">
              <Globe className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              {lang === 'en' ? 'English' : 
               lang === 'hi' ? 'हिंदी' : 
               lang === 'gu' ? 'ગુજરાતી' : 
               lang === 'mr' ? 'मराठी' : 
               lang === 'pa' ? 'ਪੰਜਾਬੀ' : lang}
            </span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
          
          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg py-2 overflow-hidden z-50">
              {[
                { code: 'en', label: 'English' },
                { code: 'hi', label: 'हिंदी' },
                { code: 'gu', label: 'ગુજરાતી' },
                { code: 'mr', label: 'मराठी' },
                { code: 'pa', label: 'ਪੰਜਾਬੀ' }
              ].map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code as Language); setLangOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors ${lang === l.code ? 'text-[#1b4332]' : 'text-gray-500'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
