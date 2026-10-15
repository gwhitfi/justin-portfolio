import AboutSection from "./components/sections/AboutSection";
import Header from "./components/sections/Header";
import ProjectSection from "./components/sections/ProjectSection";
import WelcomeSection from "./components/sections/WelcomeSection";
import "./index.css";
import ContactSection from "./components/sections/ContactSection";

function App() {
    return (
        <div
            id="top"
            className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-16 font-sans text-zinc-300 antialiased md:px-8"
        >
            <Header />
            <WelcomeSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}

export default App;
