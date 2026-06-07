import AboutSection from "./components/AboutSection";
import Header from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import WelcomeCard from "./components/WelcomeCard";
import "./index.css";
import ContactSection from "./components/ContactSection";

function App() {
    return (
        <div className="flex flex-col items-center gap-5 min-h-screen bg-neutral-900 p-5">
            <Header />
            <WelcomeCard />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}

export default App;
