import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Floating button that appears once the hero is out of view and returns to the top of the page.
// The scroll is smooth via the page's CSS (instant when the visitor prefers reduced motion), and keyboard focus
// moves to the name link in the header so the next Tab starts from the top.
export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function toTop() {
        window.scrollTo({ top: 0 });
        document.querySelector<HTMLElement>("header [data-brand]")?.focus({ preventScroll: true });
    }

    return (
        <button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            title="Back to top"
            tabIndex={visible ? 0 : -1}
            aria-hidden={!visible}
            className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-20 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-ink/10 bg-surface/90 text-ink shadow-lg shadow-ink/10 backdrop-blur transition duration-200 hover:border-accent/40 hover:text-accent sm:right-6 sm:bottom-6 ${
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
            }`}
        >
            <ArrowUp size={20} aria-hidden="true" />
        </button>
    );
}
