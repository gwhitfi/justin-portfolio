import AboutSection from "./components/sections/AboutSection";
import Header from "./components/sections/Header";
import ProjectSection from "./components/sections/ProjectSection";
import WelcomeSection from "./components/sections/WelcomeSection";
import "./index.css";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
import BackToTop from "./components/BackToTop";
import { primaryButton } from "./components/projects/styles";

function App() {
    return (
        <div id="top" className="font-sans text-body antialiased">
            {/* First stop for keyboard users; hidden until it has focus. */}
            <a href="#main" className={`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-40 ${primaryButton}`}>
                Skip to content
            </a>
            <Header />
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pt-4 pb-16 md:px-8">
                <main id="main" className="flex scroll-mt-20 flex-col gap-12">
                    <WelcomeSection />
                    <ProjectSection />
                    <AboutSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
            <BackToTop />
        </div>
    );
}

export default App;
