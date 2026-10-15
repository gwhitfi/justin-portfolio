import { useState } from "react";
import type { Project } from "../../data/projects";
import TechIcon from "../TechIcon";
import ApiIcon from "../ApiIcon";

export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, screenshot, githubLink, hostedLink, techIcons, apisUsed } = project;
    const [imgOpen, setImgOpen] = useState(false);
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 transition duration-300 hover:border-accent/25 hover:shadow-md hover:shadow-accent/5">
            {screenshot ? (
                <img
                    src={screenshot}
                    alt={`${title} screenshot`}
                    onClick={() => setImgOpen((prev) => !prev)}
                    className="h-20 w-full cursor-zoom-in border-b border-white/10 object-cover object-top lg:h-28"
                />
            ) : (
                <div className="h-20 w-full border-b border-white/10 lg:h-28" />
            )}
            <div className="flex flex-1 flex-col gap-2 p-3 lg:gap-3 lg:p-4">
                <h2 className="text-center text-base">{title}</h2>
                <p className="text-[13px] text-zinc-400 leading-snug">{description}</p>
                <div className="mt-auto flex flex-wrap justify-center gap-2 text-sm">
                    {techIcons?.map((icon) => {
                        return (
                            <div key={icon} className="relative">
                                <TechIcon icon={icon} />
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-wrap justify-center gap-1 text-xs">
                    {apisUsed?.map((api) => {
                        return (
                            <div key={api} className="relative">
                                <ApiIcon api={api} />
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-1.5 pt-1 xl:flex-row xl:gap-2">
                    <a href={githubLink} className="flex-1">
                        <button className="w-full border border-white/15 text-zinc-100 text-xs font-medium py-1 px-2 rounded-full hover:cursor-pointer hover:bg-white/10 transition">
                            View GitHub
                        </button>
                    </a>
                    {hostedLink && (
                        <a href={hostedLink} className="flex-1">
                            <button className="w-full bg-accent text-zinc-950 text-xs font-medium py-1 px-2 rounded-full hover:cursor-pointer hover:brightness-110 shadow-lg shadow-accent/20 transition">
                                View Project
                            </button>
                        </a>
                    )}
                </div>
            </div>
            {imgOpen && (
                <div
                    onClick={() => setImgOpen(false)}
                    className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
                >
                    <img
                        src={screenshot}
                        alt={`${title} screenshot`}
                        className="max-h-full max-w-full rounded-xl shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
}
