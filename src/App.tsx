import { AppProvider, useAppContext } from './context';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AdvisoryModule } from './components/AdvisoryModule';
import { PlannerModule } from './components/PlannerModule';
import { NewsModule } from './components/NewsModule';
import { AboutModule } from './components/AboutModule';
import { HelpModule } from './components/HelpModule';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Chatbot } from './components/Chatbot';

function AppContent() {
  const { activeTab } = useAppContext();

  return (
    <div className="min-h-screen font-sans selection:bg-[#40916c]/30">
      <Header />
      
      <main>
        {activeTab === 'home' && <Hero />}
        {activeTab === 'advisory' && <AdvisoryModule />}
        {activeTab === 'planner' && <PlannerModule />}
        {activeTab === 'news' && <NewsModule />}
        {activeTab === 'about' && <AboutModule />}
        {activeTab === 'contact' && <HelpModule />}
      </main>

      <Footer />
      <Toast />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
