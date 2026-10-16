import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-4 z-20 mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-3 shadow-xl backdrop-blur-xl">
            <a href="#top">
                <h1 className="text-xl md:text-2xl text-emerald-500 transition duration-300 hover:scale-[1.03]">
                    Justin Whitfield
                </h1>
            </a>
            <Menu className="cursor-pointer md:hidden" onClick={() => setMenuOpen((prev) => !prev)} />
            <div className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-1 text-sm md:flex md:w-auto md:flex-row`}>
                <a
                    href="#projects"
                    className="rounded-full px-4 py-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                    Projects
                </a>
                <a
                    href="#about"
                    className="rounded-full px-4 py-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                    About
                </a>
                <a
                    href="#contact"
                    className="rounded-full px-4 py-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                    Contact
                </a>
                <a
                    href="https://drive.google.com/file/d/1Rlf0Eudkl3cd7iG9cmK3y_sdAYkc48v2/view?usp=sharing"
                    className="rounded-full bg-accent/10 px-4 py-2 text-accent transition hover:bg-accent/20"
                    target="_blank"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
