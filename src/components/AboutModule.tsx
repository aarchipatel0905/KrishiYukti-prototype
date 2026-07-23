import { useState } from 'react';
import { Sprout, Target, Lightbulb, BookOpen, TrendingUp, Mic, Camera, Truck, Leaf } from 'lucide-react';

export function AboutModule() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#F8FAF8] flex flex-col justify-between">
      {/* Hero Banner Section */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-12 pb-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-[#059669] font-bold text-xs px-4 py-1.5 rounded-full border border-emerald-200">
          <Sprout className="w-3.5 h-3.5" /> Rooted in Passion, Driven by Intelligence
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#042F2E] tracking-tight leading-tight">
          About <span className="text-[#059669]">KrishiYukti</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          Revolutionizing Indian agriculture through artificial intelligence, vernacular voice accessibility, and farmer-centric market optimization.
        </p>

        {/* High-Res Hero Image Container */}
        <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden relative shadow-xl border border-slate-200 mt-6">
          <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80" alt="Indian farmer in lush agricultural farm at golden hour" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E]/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-left text-white max-w-2xl">
            <span className="bg-[#059669] text-white font-extrabold text-[10px] px-3 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Field Tested</span>
            <p className="font-bold text-xl sm:text-2xl">Empowering 120+ Million Smallholder Farmers Across India</p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-10 space-y-16 flex-grow">

        {/* Mission & Vision Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Our Mission Card */}
          <div className="bg-white/95 backdrop-blur-[12px] border border-slate-200 rounded-3xl shadow-[0_10px_30px_-10px_rgba(4,47,46,0.05)] hover:border-emerald-600/30 hover:shadow-[0_15px_35px_-10px_rgba(5,150,105,0.12)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="h-48 w-full relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80" alt="Farmer hands tending to growing green crops" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[#042F2E] font-extrabold text-xs flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-[#059669]" /> Our Mission
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To empower India’s 120+ million smallholder farmers with cutting-edge AI technology—providing instant, 24/7 access to personalized crop advisories, leaf disease diagnosis, and post-harvest market intelligence directly in their native regional languages on basic mobile phones.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#059669]">
                <span className="mr-2 rounded-full bg-emerald-100 text-emerald-600 p-0.5"><Target className="w-3 h-3" /></span> In Their Own Language. On Their Own Phone.
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white/95 backdrop-blur-[12px] border border-slate-200 rounded-3xl shadow-[0_10px_30px_-10px_rgba(4,47,46,0.05)] hover:border-emerald-600/30 hover:shadow-[0_15px_35px_-10px_rgba(5,150,105,0.12)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="h-48 w-full relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" alt="Golden sunrise over thriving farmland" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[#042F2E] font-extrabold text-xs flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-[#D97706]" /> Our Vision
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To build a sustainable agricultural future where no harvest is lost to preventable crop disease, weather surprises, or distress sales to middlemen—ensuring lasting financial stability, climate resilience, and economic dignity for farming families across every pin code.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#D97706]">
                <Sprout className="w-3.5 h-3.5 mr-2" /> Zero Waste • Maximum Profit • True Dignity
              </div>
            </div>
          </div>

        </section>

        {/* Our Story (The Genesis) Section */}
        <section className="bg-gradient-to-br from-[#042F2E] to-[#065F46] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 space-y-4">
              <span className="bg-emerald-800/80 text-emerald-200 border border-emerald-600/50 font-extrabold text-xs px-3.5 py-1.5 rounded-xl inline-flex items-center uppercase tracking-wider">
                <BookOpen className="w-3 h-3 mr-1.5" /> The Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Our Story
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                KrishiYukti was born from a simple yet stark realization across India's heartlands: despite tireless dedication and generations of wisdom, smallholder farmers often suffer devastating crop losses—not due to lack of effort, but due to severe information asymmetry.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                A delayed diagnosis of leaf blight can destroy 40% of a tomato yield in days. A lack of real-time market pricing forces farmers into hasty, distress sales with local brokers at 30-40% below fair rates, driven by fear of crop spoilage during transport.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-72 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-lg relative">
              {!imgError ? (
                <img 
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Farmer conducting crop inspection in field" 
                  className="w-full h-full object-cover" 
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#065F46] to-[#042F2E]">
                  <Leaf className="w-16 h-16 text-emerald-500/50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#042F2E]/90 backdrop-blur-md p-3 rounded-xl border border-emerald-500/40 text-xs">
                <p className="font-bold text-[#10B981] flex items-center"><TrendingUp className="w-3.5 h-3.5 mr-1" /> +24% Average Profit Increase</p>
                <p className="text-slate-300 text-[11px] mt-1">Connecting complex agronomic science with rural smallholders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Farmers & Partners Trust KrishiYukti */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-[#042F2E] tracking-tight">
              Why Farmers & Partners Trust KrishiYukti
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              BUILT FOR REAL-WORLD RURAL IMPACT
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white/95 backdrop-blur-[12px] border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 space-y-3">
              <div className="h-32 rounded-xl overflow-hidden relative mb-2">
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80" alt="Rural farmer holding smartphone for audio advisory" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              </div>
              <div className="flex items-center gap-2 text-[#059669] font-bold text-sm">
                <Mic className="w-4 h-4" />
                <h3>Voice-First Vernacular</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Supporting 10 regional dialects through speech recognition and audio synthesis, breaking literacy barriers completely.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/95 backdrop-blur-[12px] border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 space-y-3">
              <div className="h-32 rounded-xl overflow-hidden relative mb-2">
                <img src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=400&q=80" alt="Close-up crop leaf detail for inspection" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              </div>
              <div className="flex items-center gap-2 text-[#059669] font-bold text-sm">
                <Camera className="w-4 h-4" />
                <h3>CNN Leaf Scan (94%)</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Instant photo disease classification trained on 146,000+ crop images for reliable, field-tested remedies.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/95 backdrop-blur-[12px] border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 space-y-3">
              <div className="h-32 rounded-xl overflow-hidden relative mb-2">
                <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80" alt="Fresh organic vegetables at agricultural market" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              </div>
              <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <h3>Mandi Price Arbitrage</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Live Agmarknet market price ingestion balanced against crop spoilage decay models to maximize net rupee return.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white/95 backdrop-blur-[12px] border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 space-y-3">
              <div className="h-32 rounded-xl overflow-hidden relative mb-2">
                <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop" alt="Rural agricultural transport vehicle" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }} />
              </div>
              <div className="flex items-center gap-2 text-[#059669] font-bold text-sm">
                <Truck className="w-4 h-4" />
                <h3>Micro-Pooling (-40%)</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Enabling smallholders to pool transport trucks with neighboring farms, cutting logistics expenses by up to 40%.
              </p>
            </div>

          </div>
        </section>



      </main>
    </div>
  );
}


