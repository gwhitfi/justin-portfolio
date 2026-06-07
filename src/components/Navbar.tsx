import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="flex flex-col justify-center items-center mt-5 gap-2 rounded-2xl min-w-85 w-1/2 text-white bg-neutral-800 p-5">
            <h1 className="text-4xl font-bold">Justin Whitfield</h1>
            <Menu onClick={() => setMenuOpen((prev) => !prev)} />
            {menuOpen && (
                <div className="flex gap-2 ">
                    <a
                        href="#projects"
                        className="hover:cursor-pointer hover:bg-neutral-700 border border-neutral-300 p-2 rounded-2xl"
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="hover:cursor-pointer hover:bg-neutral-700 border border-neutral-300 p-2 rounded-2xl"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="hover:cursor-pointer hover:bg-neutral-700 border border-neutral-300 p-2 rounded-2xl"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
