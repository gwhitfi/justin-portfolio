import { Menu, X } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useEffect, useRef, useState } from "react";
import { external, primaryButton } from "../projects/styles";
import { GITHUB_URL, LINKEDIN_URL } from "../../data/profile";

const SECTIONS = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
] as const;

const iconButton =
    "inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-body transition hover:border-ink/25 hover:bg-ink/5 hover:text-ink";

// "in" mark for LinkedIn (neither icon set ships the logo).
function LinkedInMark() {
    return (
        <span aria-hidden="true" className="font-sans text-[15px] leading-none font-bold tracking-tight">
            in
        </span>
    );
}

// Full-width sticky header: transparent at the top of the page, a border and shadow once scrolled.
// The link for the section in view is marked; on phones the menu drops down over the page.
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const close = () => setMenuOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // A section counts as "in view" when it crosses a band just below the header. Contact is the last section and
    // can't scroll that far up, so reaching the bottom of the page marks it.
    useEffect(() => {
        const visible = new Set<string>();
        const update = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            const last = SECTIONS[SECTIONS.length - 1].id;
            setActive(atBottom ? last : (SECTIONS.find(({ id }) => visible.has(id))?.id ?? null));
        };
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                }
                update();
            },
            { rootMargin: "-30% 0px -60% 0px" },
        );
        for (const { id } of SECTIONS) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
        window.addEventListener("scroll", update, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", update);
        };
    }, []);

    // While the phone menu is open: Escape closes it and hands focus back to the button; a tap elsewhere closes it.
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            setMenuOpen(false);
            buttonRef.current?.focus();
        };
        const onPointerDown = (e: PointerEvent) => {
            if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        window.addEventListener("pointerdown", onPointerDown);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("pointerdown", onPointerDown);
        };
    }, [menuOpen]);

    const raised = scrolled || menuOpen;

    return (
        <header
            ref={headerRef}
            className={`sticky top-0 z-30 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200 ${
                raised ? "border-ink/10 bg-page/85 shadow-sm shadow-ink/5" : "border-transparent bg-page/0"
            }`}
        >
            <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
                <a href="#top" aria-label="Justin Whitfield, back to top" className="group flex items-center gap-3 rounded-lg">
                    <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-white shadow-sm shadow-accent/30 transition group-hover:brightness-110"
                    >
                        JW
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="text-base font-semibold tracking-tight text-ink">Justin Whitfield</span>
                        <span className="font-mono text-[11px] text-muted">Software developer</span>
                    </span>
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {SECTIONS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={active === id ? "location" : undefined}
                            className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition hover:text-ink ${
                                active === id ? "text-ink" : "text-body"
                            }`}
                        >
                            {label}
                            <span
                                aria-hidden="true"
                                className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity ${
                                    active === id ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-2 md:flex">
                    <a href={GITHUB_URL} {...external} aria-label="GitHub profile" className={iconButton}>
                        <SiGithub size={17} aria-hidden />
                    </a>
                    <a href={LINKEDIN_URL} {...external} aria-label="LinkedIn profile" className={iconButton}>
                        <LinkedInMark />
                    </a>
                    <a href="#contact" className={`${primaryButton} ml-1 min-h-9 px-4 py-1.5 shadow-md`}>
                        Get in touch
                    </a>
                </div>

                <button
                    ref={buttonRef}
                    type="button"
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                    aria-controls="site-menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="-mr-2 inline-flex size-10 cursor-pointer items-center justify-center rounded-lg text-ink transition hover:bg-ink/5 md:hidden"
                >
                    {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </nav>

            {/* Phone menu: drops down over the page instead of pushing it down. */}
            <div
                id="site-menu"
                className={`${menuOpen ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-ink/10 bg-page shadow-lg shadow-ink/10 md:hidden`}
            >
                <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
                    {SECTIONS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={close}
                            aria-current={active === id ? "location" : undefined}
                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition hover:bg-ink/5 ${
                                active === id ? "bg-ink/5 text-ink" : "text-body"
                            }`}
                        >
                            {label}
                            {active === id && <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />}
                        </a>
                    ))}
                    <div className="mt-2 flex items-center gap-2 border-t border-ink/10 px-1 pt-4 pb-1">
                        <a href={GITHUB_URL} {...external} onClick={close} aria-label="GitHub profile" className={iconButton}>
                            <SiGithub size={17} aria-hidden />
                        </a>
                        <a href={LINKEDIN_URL} {...external} onClick={close} aria-label="LinkedIn profile" className={iconButton}>
                            <LinkedInMark />
                        </a>
                        <a href="#contact" onClick={close} className={`${primaryButton} ml-auto`}>
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
