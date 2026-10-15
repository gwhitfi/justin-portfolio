import { useState } from "react";
import type { Project } from "../../data/projects";
import TechIcon from "../TechIcon";
import ApiIcon from "../ApiIcon";

export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, screenshot, githubLink, hostedLink, techIcons, apisUsed } = project;
    const [imgOpen, setImgOpen] = useState(false);
    return (
        <div className="bg-zinc-950/60 border border-white/5 hover:border-indigo-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition duration-300 rounded-2xl p-6 flex flex-col items-center gap-5">
            <h2 className="text-2xl md:text-3xl">{title}</h2>
            <img
                src={screenshot}
                alt={`${title} screenshot`}
                onClick={() => setImgOpen((prev) => !prev)}
                className={`${imgOpen ? "w-2xl" : "w-64"} rounded-xl border border-white/10 transition-all cursor-zoom-in`}
            />
            <p className="text-center text-zinc-400 md:text-lg leading-relaxed">{description}</p>
            <div className="flex gap-5">
                {techIcons?.map((icon) => {
                    return (
                        <div key={icon} className="relative">
                            <TechIcon icon={icon} />
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {apisUsed?.map((api) => {
                    return (
                        <div key={api} className="relative">
                            <ApiIcon api={api} />
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-2">
                <a href={githubLink}>
                    <button className="border border-white/15 text-zinc-100 text-sm font-medium py-2 px-2 w-32 rounded-full hover:cursor-pointer hover:bg-white/10 transition md:text-base md:w-40">
                        View GitHub
                    </button>
                </a>
                {hostedLink && (
                    <a href={hostedLink}>
                        <button className="bg-linear-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium py-2 px-2 w-32 rounded-full hover:cursor-pointer hover:brightness-110 shadow-lg shadow-indigo-500/25 transition md:text-base md:w-40">
                            View Project
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}
