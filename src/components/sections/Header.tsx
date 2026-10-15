import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-zinc-900/60 border border-white/10 shadow-xl backdrop-blur rounded-3xl p-5 w-full flex flex-col items-center gap-5 md:p-15">
            <h1 className="text-4xl md:text-5xl lg:text-6xl bg-linear-to-r from-white via-indigo-200 to-violet-400 bg-clip-text text-transparent">Justin Whitfield</h1>
            <Menu onClick={() => setMenuOpen((prev) => !prev)} />
            {menuOpen && (
                <div className="flex flex-wrap justify-center gap-2 text-center">
                    <a
                        href="#projects"
                        className="bg-white/5 hover:bg-white/15 transition py-2 px-4 w-24 md:w-36 rounded-full"
                    >
                        Projects
                    </a>
                    <a href="#about" className="bg-white/5 hover:bg-white/15 transition py-2 px-4 w-24 md:w-36 rounded-full">
                        About
                    </a>
                    <a
                        href="#contact"
                        className="bg-white/5 hover:bg-white/15 transition py-2 px-4 w-24 md:w-36 rounded-full"
                    >
                        Contact
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1ylfwHzjxOfg5b6AIPKactL3NEZG3fQP8/view?usp=sharing"
                        className="bg-white/5 hover:bg-white/15 transition py-2 px-4 w-24 md:w-36 rounded-full"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
