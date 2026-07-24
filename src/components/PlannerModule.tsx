import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { mockMandiPrices, mockChartData } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, TrendingUp, Phone, X, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context';

export function PlannerModule() {
  const { showToast } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [holdingDays, setHoldingDays] = useState(30);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const day = payload[0].payload.day;
      const rate = 1500 + day * 20;
      const profit = rate - day * 8;
      
      return (
        <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-xl min-w-[200px]">
          <p className="font-bold text-gray-800 mb-2 border-b border-gray-100 pb-1">Day {day}</p>
          <div className="space-y-1">
            <p className="text-xs text-gray-600 flex justify-between gap-4">
              <span>Market Rate:</span>
              <span className="font-bold text-blue-600">₹{rate}/Qtl</span>
            </p>
            <p className="text-xs text-gray-600 flex justify-between gap-4">
              <span>Net Profit:</span>
              <span className="font-bold text-green-600">₹{profit}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleAnalyze = () => {
    showToast('Analyzing market trends and spoilage data...', 'info');
    setTimeout(() => setAnalyzed(true), 1200);
  };

  const handleSendAlert = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    showToast('WhatsApp Price Alert Sent Successfully!', 'success');
    setPhone('');
  };

  let recStatus = 'green';
  let recTitle = 'HOLD FOR SHORT TERM (15 DAYS)';
  let recDesc = 'Market forecasting indicates a price increase over 15 days. Storing in certified cold storage yields a projected net gain after expenses.';
  let RecIcon = CheckCircle;
  let recColors = {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    textMain: 'text-emerald-900',
    textSub: 'text-emerald-800',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    label: 'text-emerald-800'
  };

  if (holdingDays <= 5) {
    recStatus = 'red';
    recTitle = 'SELL NOW AT LOCAL MANDI';
    recDesc = 'High spoilage risk detected for your holding period. Sell immediately at the nearest mandi to minimize losses.';
    RecIcon = AlertTriangle;
    recColors = {
      bg: 'bg-red-50',
      border: 'border-red-200',
      textMain: 'text-red-900',
      textSub: 'text-red-800',
      iconBg: 'bg-red-100',
      iconText: 'text-red-600',
      label: 'text-red-800'
    };
  } else if (holdingDays < 15) {
    recStatus = 'yellow';
    recTitle = 'MONITOR PRICES CLOSELY (SELL IN 3-5 DAYS)';
    recDesc = 'Moderate holding period allows for slight price arbitration. Monitor market closely and store in a ventilated shed for up to 5 days.';
    RecIcon = AlertTriangle;
    recColors = {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      textMain: 'text-amber-900',
      textSub: 'text-amber-800',
      iconBg: 'bg-amber-100',
      iconText: 'text-amber-600',
      label: 'text-amber-800'
    };
  }

  return (
    <section id="planner" className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Post-Harvest Loss Reduction Planner" 
          subtitle="Maximize Profit. Reduce Crop Loss through data-driven transport and storage decisions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Inputs Column - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Harvest Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Crop</label>
                  <select className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Wheat</option>
                    <option>Rice</option>
                    <option>Maize</option>
                    <option>Mustard</option>
                    <option>Cotton</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Quantity (Quintals)</label>
                  <input type="number" defaultValue="100" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Harvest Date</label>
                  <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Max Feasible Holding Period (Days)</label>
                  <input 
                    type="number" 
                    value={holdingDays} 
                    onChange={(e) => setHoldingDays(Number(e.target.value))} 
                    min={1} 
                    max={90} 
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                
                <button 
                  onClick={handleAnalyze}
                  className="w-full bg-[#1b4332] text-white font-bold py-3 rounded-xl hover:bg-[#2d6a4f] transition-all shadow-md active:scale-[0.98]"
                >
                  Analyze Profit
                </button>
              </div>
            </div>
            
            {/* Profit at Risk Card */}
            {analyzed && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Profit At Risk</h3>
                </div>
                <div className="text-3xl font-black text-red-500 mb-1">₹1,450</div>
                <p className="text-xs text-gray-500">
                  Delaying sale by 3 days risks spoilage due to forecasted heat.
                </p>
              </motion.div>
            )}
          </div>

          {/* Outputs Column - 8 cols */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Decision Banner */}
            <div className={`rounded-2xl p-6 shadow-sm flex items-start justify-between border transition-all ${analyzed ? recColors.bg + ' ' + recColors.border : 'bg-white border-gray-200'}`}>
              <div>
                <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${analyzed ? recColors.label : 'text-gray-400'}`}>
                  Recommendation
                </h3>
                <div className={`text-xl md:text-2xl font-bold mb-2 ${analyzed ? recColors.textMain : 'text-gray-400'}`}>
                  {analyzed ? `Recommendation: ${recTitle}` : 'Awaiting Analysis...'}
                </div>
                {analyzed && (
                  <p className={`text-sm font-medium max-w-xl ${recColors.textSub}`}>
                    {recDesc}
                  </p>
                )}
              </div>
              {analyzed && (
                <div className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center border shrink-0 ml-4 ${recColors.iconBg} ${recColors.border}`}>
                  <RecIcon className={`w-6 h-6 ${recColors.iconText}`} />
                </div>
              )}
            </div>

            {analyzed && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 gap-6"
              >
                
                {/* Spoilage Curve Chart */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Profit Risk Analysis</h3>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="day" 
                          tickLine={false} 
                          axisLine={false} 
                          tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 'bold' }} 
                          tickFormatter={(val) => `Day ${val}`}
                        />
                        <YAxis 
                          tickLine={false} 
                          axisLine={false} 
                          tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 'bold' }}
                          tickFormatter={(val) => `${val}%`}
                        />
                        <Tooltip 
                          content={<CustomTooltip />}
                          cursor={{ stroke: '#f97316', strokeWidth: 1, strokeDasharray: '5 5' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="quality" 
                          stroke="#f97316" 
                          strokeWidth={3} 
                          dot={{ r: 4, fill: '#f97316', strokeWidth: 0 }} 
                          activeDot={{ r: 8, fill: '#ffffff', stroke: '#f97316', strokeWidth: 2 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Market Comparison Table */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Market Comparison</h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 overflow-x-auto">
                    <table className="w-full text-[10px] md:text-xs text-left">
                      <thead>
                        <tr className="text-gray-400 uppercase tracking-tighter border-b border-gray-200">
                          <th className="pb-2 font-bold px-2">Market</th>
                          <th className="pb-2 font-bold px-2">Dist (km)</th>
                          <th className="pb-2 font-bold px-2">Rate (₹)</th>
                          <th className="pb-2 font-bold px-2">Transport</th>
                          <th className="pb-2 font-bold px-2">Storage</th>
                          <th className="pb-2 font-bold px-2">Net (₹)</th>
                          <th className="pb-2 font-bold px-2">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {mockMandiPrices.map((mandi, idx) => {
                          const isBest = mandi.action === 'STORE IN COLD STORAGE';
                          return (
                          <tr key={idx} className={`border-t border-gray-200/50 ${isBest ? 'bg-green-100/50' : ''}`}>
                            <td className="py-2 px-2 font-semibold">
                              {mandi.market}
                            </td>
                            <td className="py-2 px-2 text-gray-500">{mandi.distance}</td>
                            <td className="py-2 px-2 text-gray-500">₹{mandi.price}</td>
                            <td className="py-2 px-2 text-red-500">-₹{mandi.transport}</td>
                            <td className="py-2 px-2 text-red-500">-₹{mandi.storage}</td>
                            <td className={`py-2 px-2 font-bold ${isBest ? 'text-green-700' : 'text-gray-800'}`}>
                              ₹{mandi.net}
                            </td>
                            <td className="py-2 px-2 font-bold">
                              <span className={`px-2 py-1 rounded-md text-[8px] md:text-[10px] uppercase tracking-wider ${isBest ? 'bg-green-100 text-green-700' : mandi.action === 'SELL NOW' ? 'bg-orange-100 text-orange-700' : mandi.action.includes('NOT') ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                {mandi.action}
                              </span>
                            </td>
                          </tr>
                        )})}
                      </tbody>
                    </table>
                  </div>
                  
                  <button 
                    onClick={() => setShowModal(true)}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    Alert Prices on WhatsApp
                  </button>
                </div>

              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1f2937]/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6 border-b border-[#e5e7eb] flex justify-between items-center bg-[#f8faf7]">
                <h3 className="text-xl font-bold text-[#1b4332] flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#22c55e]" />
                  WhatsApp Price Alert
                </h3>
                <button onClick={() => setShowModal(false)} className="text-[#1f2937]/50 hover:text-[#1f2937] transition">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSendAlert} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-2">Your Mobile Number</label>
                  <div className="flex border border-[#e5e7eb] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#40916c]">
                    <span className="bg-[#f8faf7] px-4 py-3 text-[#1f2937]/50 border-r border-[#e5e7eb] font-medium">+91</span>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="flex-1 px-4 py-3 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-2">Target Price Threshold (₹/Qtl)</label>
                  <input 
                    type="number" 
                    required
                    defaultValue="1800"
                    className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#40916c]"
                  />
                </div>
                
                {/* WhatsApp Preview Card */}
                <div className="bg-[#e5ddd5] p-4 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://static.whatsapp.net/rsrc.php/v3/yl/r/r_Qpz9tZq_z.png')" }}></div>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-800 shadow-sm relative z-10 max-w-[85%] float-left rounded-tl-none">
                    <p className="font-bold text-[#1b4332] mb-1">KrishiYukti Alert 🔔</p>
                    <p>Wheat price at <strong>District Hub</strong> has reached your target of <strong>₹1,800/Qtl</strong>.</p>
                    <p className="mt-2 text-xs text-gray-500 text-right">10:42 AM</p>
                  </div>
                  <div className="clear-both"></div>
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-xl font-bold hover:bg-[#f8faf7] transition">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 py-3 bg-[#22c55e] text-white rounded-xl font-bold hover:bg-[#16a34a] shadow-lg shadow-[#22c55e]/20 transition">
                    Set Alert
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
