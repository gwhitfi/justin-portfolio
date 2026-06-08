import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-neutral-950 rounded-2xl p-5 w-full flex flex-col items-center gap-5 md:p-15">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Justin Whitfield</h1>
            <Menu onClick={() => setMenuOpen((prev) => !prev)} />
            {menuOpen && (
                <div className="flex gap-2 text-center">
                    <a
                        href="#projects"
                        className="bg-neutral-900 py-2 px-4 w-24 md:w-36 rounded-2xl"
                    >
                        Projects
                    </a>
                    <a href="#about" className="bg-neutral-900 py-2 px-4 w-24 md:w-36 rounded-2xl">
                        About
                    </a>
                    <a
                        href="#contact"
                        className="bg-neutral-900 py-2 px-4 w-24 md:w-36 rounded-2xl"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
