import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { useAppContext } from '../context';
import { Logo } from './Logo';

export function Footer() {
  const { setActiveTab } = useAppContext();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Logo />
              <span className="text-lg font-bold tracking-tight text-[#0D2818]">KrishiYukti</span>
            </div>
            <p className="text-gray-500 text-xs mb-6">
              In Their Own Language. On Their Own Phone. For Their Own Future.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1b4332] hover:text-white transition-colors">
                <Twitter className="w-3 h-3" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1b4332] hover:text-white transition-colors">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1b4332] hover:text-white transition-colors">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#ef4444] hover:text-white transition-colors">
                <Youtube className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 text-sm mb-4">Product</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#40916c] transition-colors">Home</button></li>
              <li><button onClick={() => { setActiveTab('advisory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#40916c] transition-colors">Precision Advisory</button></li>
              <li><button onClick={() => { setActiveTab('planner'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#40916c] transition-colors">Post-Harvest Planner</button></li>
              <li><a href="#" className="hover:text-[#40916c] transition-colors">Market Prices</a></li>
              <li><a href="#" className="hover:text-[#40916c] transition-colors">Weather Forecast</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 text-sm mb-4">Resources</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><button onClick={() => { setActiveTab('news'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#40916c] transition-colors">Farmer News</button></li>
              <li><button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#40916c] transition-colors">Our Mission</button></li>
              <li><a href="#" className="hover:text-[#40916c] transition-colors">Agri Glossary</a></li>
              <li><button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#40916c] transition-colors">FAQ & Help</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 text-sm mb-4">Legal</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#40916c] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#40916c] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#40916c] transition-colors">Data Usage</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} KrishiYukti. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
