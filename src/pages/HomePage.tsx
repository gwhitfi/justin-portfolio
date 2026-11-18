import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WelcomeSection from "../components/sections/WelcomeSection";
import ProjectSection from "../components/sections/ProjectSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
    const { hash, key } = useLocation();

    useEffect(() => {
        document.title = "Justin Whitfield | Software Developer";
    }, []);

    // Nav links are router links (so they also work from other pages), so the jump to a section happens here.
    // The scroll is smooth through the page's CSS, and instant when the visitor prefers reduced motion.
    useEffect(() => {
        const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
        if (target) target.scrollIntoView();
        else if (!hash) window.scrollTo({ top: 0 });
    }, [hash, key]);

    return (
        <>
            <WelcomeSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}
