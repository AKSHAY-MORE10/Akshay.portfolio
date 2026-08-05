import { useEffect, useState } from "react";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "./components/ui/tubelight-navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { SplashCursor } from "./components/ui/splash-cursor";
import { AboutSection } from "./components/ui/about";
import Hero from "./components/Hero";
import { Footer } from "./components/ui/footer-section";
import { TimelineSection } from "./components/TimelineSection";
import Projects from "./components/Projects";
import { BlogSection } from "./components/BlogSection";
import { ContactSimpleForm } from "./api/Contact";
import { ServicesOverviewPage } from "./pages/services/ServicesOverviewPage";
import { WebDevelopmentPage } from "./pages/services/WebDevelopmentPage";
import { AutomationSystemsPage } from "./pages/services/AutomationSystemsPage";
import { AiMachineLearningPage } from "./pages/services/AiMachineLearningPage";
import { AiIntegrationsPage } from "./pages/services/AiIntegrationsPage";
import { BlogIndexPage } from "./pages/blog/BlogIndexPage";
import { BlogPostPage } from "./pages/blog/BlogPostPage";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/blocks/testimonials-with-marquee";

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

function App() {
  const [pathname, setPathname] = useState(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    const nextPath = normalizePath(path.split("?")[0]);

    if (nextPath !== pathname) {
      window.history.pushState({}, "", nextPath);
      setPathname(nextPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const blogSlugMatch = pathname.match(/^\/blog\/([^/]+)$/);

  if (pathname === "/blog") {
    return (
      <ThemeProvider>
        <BlogIndexPage onNavigate={navigate} />
      </ThemeProvider>
    );
  }

  if (blogSlugMatch) {
    return (
      <ThemeProvider>
        <BlogPostPage
          slug={decodeURIComponent(blogSlugMatch[1])}
          onNavigate={navigate}
        />
      </ThemeProvider>
    );
  }

  if (pathname === "/services") {
    return (
      <ThemeProvider>
        <ServicesOverviewPage onNavigate={navigate} />
      </ThemeProvider>
    );
  }

  if (pathname === "/services/web-development") {
    return (
      <ThemeProvider>
        <WebDevelopmentPage onNavigate={navigate} />
      </ThemeProvider>
    );
  }

  if (pathname === "/services/automation-systems") {
    return (
      <ThemeProvider>
        <AutomationSystemsPage onNavigate={navigate} />
      </ThemeProvider>
    );
  }

  if (pathname === "/services/ai-machine-learning") {
    return (
      <ThemeProvider>
        <AiMachineLearningPage onNavigate={navigate} />
      </ThemeProvider>
    );
  }

  if (pathname === "/services/ai-integrations") {
    return (
      <ThemeProvider>
        <AiIntegrationsPage onNavigate={navigate} />
      </ThemeProvider>
    );
  }

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: FileText },
  ];

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <SplashCursor />
        <div className="relative z-10">
          <NavBar items={navItems} className="h-fit" />
          <main className="pt-8 lg:pt-20">
            <Hero />
            <div className="w-full px-4">
              <TimelineSection />
            </div>
            <Projects />
            <ServicesSection onNavigate={navigate} />
            {/* <TestimonialsSection  /> */}
            <BlogSection onNavigate={navigate} />
            {/* <FAQSection /> */}
            <ContactSimpleForm />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
