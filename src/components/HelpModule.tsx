import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { ChevronDown, Send, WifiOff } from 'lucide-react';
import { useAppContext } from '../context';
import { motion, AnimatePresence } from 'motion/react';

export function HelpModule() {
  const { showToast } = useAppContext();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  const handleSendContact = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent successfully. Our team will contact you soon.', 'success');
    (e.target as HTMLFormElement).reset();
  };

  const faqs = [
    {
      q: "How does the AI advisory work?",
      a: "Our AI model analyzes your crop type, location data, historical weather, and uploaded leaf images to provide customized daily recommendations for irrigation, fertilizer, and disease management."
    },
    {
      q: "Can I use the app offline?",
      a: "Yes! The application caches critical data. Once you load your dashboard while online, you can access your 7-day advisory and planner modules even without internet connectivity in the field."
    },
    {
      q: "How accurate are the market price recommendations?",
      a: "Market prices are updated daily from integrated government APIs (eNAM) and local market boards. The net profit calculation includes dynamic transport cost estimates based on your GPS distance to the market."
    },
    {
      q: "Is GPS location required?",
      a: "While GPS provides the most accurate weather and transport recommendations, you can manually enter your Village Pincode or select from the dropdown if you prefer not to share your live location."
    }
  ];

  return (
    <section id="help" className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Help & Contact" 
          subtitle="Get answers to your questions or reach out to our support team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ & Status */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-green-50 p-2.5 rounded-xl border border-green-100">
                <WifiOff className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#1b4332] text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                  Offline Mode Ready (Cached)
                </h3>
                <p className="text-gray-500 text-xs">
                  Core modules and your latest advisory are cached and ready for offline use in the field.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1b4332] mb-6">Frequently Asked Questions</h3>
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-[#40916c] transition-colors">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-sm text-gray-800 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-gray-500 text-xs leading-relaxed border-t border-gray-100 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#1b4332] mb-6">Send a Message</h3>
              <form onSubmit={handleSendContact} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Name</label>
                  <input type="text" required placeholder="John Farmer" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Email or Phone</label>
                  <input type="text" required placeholder="john@example.com or +91..." className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Message</label>
                  <textarea required rows={4} placeholder="How can we help you?" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-[#1b4332] text-white rounded-xl font-bold text-sm hover:bg-[#2d6a4f] shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
