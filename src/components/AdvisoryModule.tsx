import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, UploadCloud, Volume2, Droplets, Sprout, Bug, CheckCircle, Leaf, Info } from 'lucide-react';
import { mockAdvisories } from '../data';
import { useAppContext } from '../context';

export function AdvisoryModule() {
  const { showToast, speak } = useAppContext();
  const [location, setLocation] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleDetectGPS = () => {
    showToast('Detecting location...', 'info');
    setTimeout(() => {
      setLocation('Village A, District Hub');
      showToast('Location detected successfully', 'success');
    }, 1500);
  };

  const simulateScan = (fileName: string, disease: string) => {
    setIsScanning(true);
    setScanComplete(false);
    setScanResult(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setScanResult(disease);
      showToast(`Leaf analysis complete. Detected: ${disease}`, 'success');
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        setFileError("File size exceeds 10MB limit. Please upload a smaller image.");
        e.target.value = ''; // clear input
        return;
      }
      setFile(selectedFile);
      simulateScan(selectedFile.name, "Early Blight (94% High Confidence)");
    }
  };

  const handleGenerate = () => {
    showToast('Generating personalized advisory...', 'info');
    setTimeout(() => setShowResults(true), 1500);
  };

  const handleReadAloud = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speak(text);
  };

  const icons: Record<string, React.ElementType> = {
    'Droplets': Droplets,
    'Sprout': Sprout,
    'Bug': Bug
  };

  return (
    <section id="advisory" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Precision Crop Advisory System" 
          subtitle="AI-generated 7-Day Personalized Crop Action Plan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Field Parameters</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Location</label>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Pincode or Village"
                    className="flex-1 rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button 
                    onClick={handleDetectGPS}
                    className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors px-2 py-1 rounded-md uppercase tracking-wider"
                  >
                    <MapPin className="w-3 h-3" />
                    <span className="hidden sm:inline">Detect GPS</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Crop Type</label>
                  <select className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Wheat</option>
                    <option>Rice</option>
                    <option>Cotton</option>
                    <option>Tomato</option>
                    <option>Maize</option>
                    <option>Soybean</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Sowing Date</label>
                  <input type="date" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Weather Observation</label>
                <select className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Sunny</option>
                  <option>Rain Expected</option>
                  <option>Heat Wave</option>
                  <option>Humid</option>
                  <option>Cloudy</option>
                </select>
              </div>

              {/* Leaf Scanner */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1 flex justify-between">
                  <span>Leaf Scanner</span>
                  {scanResult && <span className="text-[#40916c] font-bold">{scanResult}</span>}
                </label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:border-green-300 transition-colors overflow-hidden mb-1">
                  <input 
                    type="file" 
                    accept="image/jpeg, image/png, image/webp, image/*" 
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  
                  {isScanning ? (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-8 h-8 rounded-full bg-[#1B4332]/20 flex items-center justify-center"
                      >
                        <UploadCloud className="w-4 h-4 text-[#1B4332]" />
                      </motion.div>
                      <p className="text-[11px] font-medium text-[#1B4332] animate-pulse">Scanning...</p>
                    </div>
                  ) : scanComplete ? (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <CheckCircle className="w-8 h-8 text-[#40916c]" />
                      <p className="text-[11px] font-medium text-[#40916c]">{file?.name || 'Scanned Leaf'}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <UploadCloud className="w-8 h-8 text-gray-300 mb-2" />
                      <span className="text-[11px] font-medium text-gray-500 text-center">Drop leaf photo to scan (Optional) — Max 10MB (JPG, PNG)</span>
                    </div>
                  )}
                </div>
                {fileError && <p className="text-red-500 text-[10px] font-medium mt-1 mb-2">{fileError}</p>}
              </div>

              <button 
                onClick={handleGenerate}
                className="w-full bg-[#1b4332] text-white font-bold py-3 rounded-xl hover:bg-[#2d6a4f] transition-all shadow-md active:scale-[0.98]"
              >
                Generate 7-Day Plan
              </button>
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col min-h-[500px]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Personalized Action Plan</h3>
            
            {!showResults ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
                <Leaf className="w-12 h-12 text-gray-300 mb-2" />
                <p className="text-sm font-medium text-gray-500">Awaiting field parameters...</p>
              </div>
            ) : (
              <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar">
                <AnimatePresence>
                  {mockAdvisories.map((advisory, idx) => {
                    const Icon = icons[advisory.icon] || Info;
                    const isHigh = advisory.confidence === 'High';
                    const isMedium = advisory.confidence === 'Medium';
                    const bgClass = isHigh ? 'bg-green-50 border-green-100' : isMedium ? 'bg-orange-50 border-orange-100' : 'bg-red-50 border-red-100';
                    const textClass = isHigh ? 'text-green-800' : isMedium ? 'text-orange-800' : 'text-red-800';
                    const iconClass = isHigh ? 'text-green-600' : isMedium ? 'text-orange-600' : 'text-red-600';
                    const badgeClass = isHigh ? 'bg-green-200 text-green-800' : isMedium ? 'bg-orange-200 text-orange-800' : 'bg-red-200 text-red-800';
                    const pClass = isHigh ? 'text-green-700' : isMedium ? 'text-orange-700' : 'text-red-700';

                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className={`p-3 border rounded-xl flex gap-3 ${bgClass}`}
                      >
                        <div className={`p-2 bg-white rounded-lg shadow-sm h-fit ${iconClass}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className={`text-sm font-bold ${textClass}`}>{advisory.title}</h4>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${badgeClass}`}>
                              {isHigh ? 'Top Priority #1' : isMedium ? 'Preventive #2' : 'Med Priority #3'}
                            </span>
                          </div>
                          
                          <p className={`text-[11px] font-medium mt-1 ${pClass}`}>
                            {advisory.description}
                          </p>
                          
                          <button 
                            onClick={(e) => handleReadAloud(e, advisory.description)}
                            className={`mt-2 flex items-center gap-1.5 text-[10px] font-bold uppercase ${iconClass} hover:opacity-70`}
                            aria-label="Read Aloud"
                          >
                            <Volume2 className="w-3 h-3" />
                            Read Aloud
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
