import AboutSection from "./components/sections/AboutSection";
import Header from "./components/sections/Header";
import ProjectSection from "./components/sections/ProjectSection";
import WelcomeSection from "./components/sections/WelcomeSection";
import "./index.css";
import ContactSection from "./components/sections/ContactSection";

function App() {
    return (
        <div className="flex flex-col items-center gap-8 p-5 min-h-screen font-sans text-zinc-300 antialiased md:max-w-2xl md:mx-auto lg:max-w-3xl xl:max-w-5xl">
            <Header />
            <WelcomeSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}

export default App;
