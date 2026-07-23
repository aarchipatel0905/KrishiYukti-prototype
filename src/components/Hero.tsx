import { motion } from 'motion/react';
import { useAppContext } from '../context';
import { 
  ArrowRight, Leaf, ShieldCheck, TrendingUp, CloudRain, 
  Camera, CloudSun, Droplet, Microscope, Volume2, CheckCircle2, 
  Coins, Truck, Wheat, Phone, AlertTriangle, Languages 
} from 'lucide-react';

export function Hero() {
  const { t, setActiveTab } = useAppContext();

  return (
    <>
      <section className="relative pt-6 pb-6 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-left rounded-3xl text-white shadow-2xl relative overflow-hidden min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1595867448834-0373ab90cb2e?w=1600&q=80" alt="Indian Wheat Field" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0D2818]/95 via-[#1B4332]/80 to-transparent"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl p-8 md:p-12"
          >
            {/* Pill Badges */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-[#1B4332] font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-emerald-300 mb-5">
              <Leaf className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>AI Precision Advisory & Market Intelligence</span>
            </div>

            {/* 1. PROJECT NAME */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-3">
              Krishi<span className="text-[#52B788]">Yukti</span> <span className="text-emerald-200/80 font-normal text-2xl lg:text-3xl ml-1">(कृषियुक्ति)</span>
            </h1>

            {/* 2. TAGLINE */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#F59E0B] tracking-tight leading-snug mb-4">
              In Their Own Language. On Their Own Phone. For Their Own Future.
            </h2>

            {/* 3. CONTENT PARAGRAPH */}
            <p className="text-green-50/90 text-sm sm:text-base font-medium leading-relaxed max-w-3xl mb-8">
              <strong>KrishiYukti</strong> is an AI-powered AgriTech engine empowering smallholder farmers with 24/7 multilingual precision guidance and post-harvest market intelligence. From instant CNN leaf disease diagnosis and 7-day weather-driven advisory calendars to real-time mandi price tracking, spoilage velocity modeling, and micro-pooling transport savings—we turn agricultural uncertainty into predictable, maximum profit.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => { setActiveTab('advisory'); window.scrollTo(0,0); }} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D97706] text-white rounded-full font-bold text-sm shadow-lg active:scale-[0.98] transition-all hover:bg-opacity-90">
                {t('startAdvisory')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => { setActiveTab('planner'); window.scrollTo(0,0); }} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-sm hover:bg-white/20 transition-all">
                {t('explorePlanner')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Modules & Impact Metrics Cards */}
      <section className="px-6 pb-12 max-w-7xl mx-auto space-y-8">
        <div className="space-y-8 py-2">
          {/* Box 1: Precision Crop Advisory */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden group hover:border-emerald-400 transition-all duration-300 shadow-sm">
            <div className="h-56 w-full relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80" alt="Green agricultural field close-up" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/90 via-[#0D2818]/30 to-transparent"></div>
              
              {/* Floating Glass Badge */}
              <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-md border border-emerald-400/40 flex items-center gap-2">
                <Leaf className="w-4 h-4" /> Module 1: Precision Advisory
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-white text-xs">
                <span className="bg-white/90 backdrop-blur-md text-[#0D2818] font-extrabold px-3 py-1 rounded-lg border border-emerald-200 shadow flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#1b4332]" /> CNN Vision Scan: 94% Confidence
                </span>
                <span className="text-emerald-200 font-semibold hidden sm:flex items-center gap-1.5"><CloudSun className="w-3.5 h-3.5" /> OpenWeather API Synced</span>
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-extrabold text-[#0D2818]">Precision Crop Advisory Engine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get personalized, 7-day stage-wise crop action plans covering irrigation scheduling, fertilizer timing, and pest defense. Powered by live weather forecasts and instant CNN leaf disease photo classification.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-1">
                <span className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg inline-flex items-center gap-1.5"><Droplet className="w-3.5 h-3.5 text-sky-500" />Weather Forecast</span>
                <span className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg inline-flex items-center gap-1.5"><Microscope className="w-3.5 h-3.5 text-[#1b4332]" />Fungicide Remedy</span>
                <span className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg inline-flex items-center gap-1.5"><Volume2 className="w-3.5 h-3.5 text-amber-600" />Vernacular Voice</span>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <span className="text-xs font-bold text-[#1b4332] flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ranked 7-Day Action Plan</span>
                <button onClick={() => { setActiveTab('advisory'); window.scrollTo(0,0); }} className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-md inline-flex items-center gap-2 justify-center">
                  Open Advisory Engine <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Box 2: Post-Harvest Loss & Mandi Planner */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden group hover:border-amber-400 transition-all duration-300 shadow-sm">
            <div className="h-56 w-full relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80" alt="Farmer checking crops on mobile phone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/90 via-[#0D2818]/30 to-transparent"></div>
              
              {/* Floating Glass Badge */}
              <div className="absolute top-4 left-4 bg-amber-600/90 backdrop-blur-md text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-md border border-amber-300/40 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Module 2: Post-Harvest Engine
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-white text-xs">
                <span className="bg-white/90 backdrop-blur-md text-[#0D2818] font-extrabold px-3 py-1 rounded-lg border border-amber-200 shadow flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-amber-600" /> Mandi Arbitrage: +₹450/Qtl Net Return
                </span>
                <span className="text-amber-200 font-semibold hidden sm:flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Micro-Pooling (-40% Cost)</span>
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-extrabold text-[#0D2818]">Post-Harvest Loss & Mandi Planner</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Maximize net income by modeling crop spoilage decay against live mandi price feeds. Get automated Sell, Store, or Transport recommendations, enable micro-pooling transport savings (-40%), and receive instant WhatsApp price alerts.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-1">
                <span className="bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg inline-flex items-center gap-1.5"><Wheat className="w-3.5 h-3.5 text-amber-600" />Spoilage Curve</span>
                <span className="bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-emerald-600" />Micro-Pooling Logistics</span>
                <span className="bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg inline-flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-600" />WhatsApp Threshold Alerts</span>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <span className="text-xs font-bold text-amber-700 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-amber-600" /> Includes Profit-at-Risk Counter</span>
                <button onClick={() => { setActiveTab('planner'); window.scrollTo(0,0); }} className="bg-[#0D2818] hover:bg-[#1b4332] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-md inline-flex items-center gap-2 justify-center">
                  Open Mandi Planner <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics Cards Row (Positioned below Module 1 & Module 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="impactSection">
          <div className="border border-gray-200 rounded-2xl p-4 flex items-center gap-3.5 bg-white shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#1b4332] flex items-center justify-center text-xl font-bold shrink-0">
              <TrendingUp className="w-5 h-5 text-[#1b4332]" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Avg Profit Increase</p>
              <p className="text-2xl font-extrabold text-[#1b4332]">+24% Net Profit</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 flex items-center gap-3.5 bg-white shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl font-bold shrink-0">
              <Droplet className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Input Savings</p>
              <p className="text-2xl font-extrabold text-sky-600">18% Spoilage Cut</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 flex items-center gap-3.5 bg-white shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl font-bold shrink-0">
              <Languages className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Vernacular Accessibility</p>
              <p className="text-2xl font-extrabold text-amber-600">10 Languages</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

