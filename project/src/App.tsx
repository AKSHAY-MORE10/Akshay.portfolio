import React from 'react';
import { Home, User, Briefcase, FileText, Github } from 'lucide-react';
import { NavBar } from './components/ui/tubelight-navbar';
import { ThemeProvider } from './context/ThemeContext';
import { SplashCursor } from './components/ui/splash-cursor';
import { AboutSection } from './components/ui/about';
import { Design } from './demo';
import Hero from './components/Hero';
import { Footer } from './components/ui/footer-section';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { MessagingLikeQnaPreview } from './components/FaqSection';
import { TestimonialsBlock } from './components/TestimonialsBlock';
import { ChatButton } from './components/ui/chat-button';
import { MiniChat } from './components/ui/mini-chat';
import Projects from './components/Projects';

function App() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Resume', url: '#resume', icon: FileText },
  ];

  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <SplashCursor />
        <div className="relative z-10">
          <NavBar items={navItems} className='h-fit'/>
          <main className="pt-20">
            <Hero/>
            <AboutSection />
            <div className="w-full px-4">
              <TimelineSection />
            </div>
            {/* <Design /> */}
            <ServicesSection />
            {/* <MessagingLikeQnaPreview /> */}
            <Projects />
            <TestimonialsBlock />
          </main>
        </div>
        <Footer/>
        {/* <ChatButton onClick={toggleChat} /> */}
        {/* <MiniChat isOpen={isChatOpen} onClose={toggleChat} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
