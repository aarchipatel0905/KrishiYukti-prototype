import React from 'react';
import { SectionTitle } from './SectionTitle';
import { mockNews } from '../data';
import { Volume2, ArrowRight, Newspaper } from 'lucide-react';
import { useAppContext } from '../context';

export function NewsModule() {
  const { showToast, speak } = useAppContext();

  const handleReadAloud = (e: React.MouseEvent, title: string, summary: string) => {
    e.stopPropagation();
    speak(`${title}. ${summary}`);
  };

  return (
    <section id="news" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Farmer News & Schemes" 
          subtitle="Stay updated with the latest policies, market trends, and subsidies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.map((news, idx) => (
            <div key={idx} className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-[#40916c] transition-all hover:shadow-md cursor-pointer overflow-hidden">
              <div className="h-40 w-full relative">
                <img src={news.image} alt={news.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] bg-white/90 text-green-800 font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#40916c] transition-colors pr-2">
                    {news.title}
                  </h3>
                  <button 
                    onClick={(e) => handleReadAloud(e, news.title, news.summary)}
                    className="p-1.5 bg-gray-50 rounded-lg text-gray-500 hover:bg-gray-200 hover:text-[#1b4332] transition-colors shrink-0"
                    aria-label="Read Aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-4 line-clamp-3">
                  {news.summary}
                </p>
                
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Newspaper className="w-3 h-3" />
                    {news.date}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#40916c] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
