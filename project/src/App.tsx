import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from './components/ui/tubelight-navbar';
import { ThemeProvider } from './context/ThemeContext';
import { SplashCursor } from './components/ui/splash-cursor';
import { AboutSection } from './components/ui/about';
import Hero from './components/Hero';
import { Footer } from './components/ui/footer-section';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsBlock } from './components/TestimonialsBlock';
import Projects from './components/Projects';
import { ContactSimpleForm } from './api/Contact';



function App() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: FileText },
  ];


  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#fff8dc] dark:bg-background/90 text-foreground relative overflow-hidden">
        <SplashCursor />
        <div className="relative z-10">
          <NavBar items={navItems} className='h-fit'/>
          <main className="pt-10 lg:pt-20">

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
            <ContactSimpleForm />
          </main>
          <Footer/>
        </div>
        {/* <Footer/> */}
        {/* <ChatButton onClick={toggleChat} /> */}
        {/* <MiniChat isOpen={isChatOpen} onClose={toggleChat} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
