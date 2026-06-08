import { useState } from "react";
import type { Project } from "../../data/projects";
import TechIcon from "../TechIcon";
import ApiIcon from "../ApiIcon";

export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, screenshot, githubLink, hostedLink, techIcons, apisUsed } = project;
    const [imgOpen, setImgOpen] = useState(false);
    return (
        <div className="bg-neutral-900 rounded-2xl p-5 flex flex-col items-center gap-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">{title}</h2>
            <img
                src={screenshot}
                alt={`${title} screenshot`}
                onClick={() => setImgOpen((prev) => !prev)}
                className={`${imgOpen ? "w-2xl" : "w-64"} `}
            />
            <p className="text-center md:text-xl lg:text-2xl">{description}</p>
            <div className="flex gap-5">
                {techIcons?.map((icon) => {
                    return (
                        <div key={icon} className="relative">
                            <TechIcon icon={icon} />
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:text-xl">
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
                    <button className="bg-neutral-950 py-2 px-2 w-32 rounded-2xl hover:cursor-pointer hover:bg-neutral-800 md:text-xl md:w-48">
                        View GitHub
                    </button>
                </a>
                {hostedLink && (
                    <a href={hostedLink}>
                        <button className="bg-neutral-950 py-2 px-2 w-32 rounded-2xl hover:cursor-pointer hover:bg-neutral-800 md:text-xl md:w-48">
                            View Project
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}
