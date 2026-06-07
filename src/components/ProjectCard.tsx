import { useState } from "react";
import type { Project } from "../data/projects";
import TechIcon from "./TechIcon";
import ApiIcon from "./ApiIcon";

export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, screenshot, githubLink, hostedLink, techIcons, apisUsed } = project;
    const [imgOpen, setImgOpen] = useState(false);
    return (
        <div className="flex flex-col items-center max-w-md gap-4 text-white bg-neutral-800 rounded-2xl py-5">
            <h2 className="text-4xl">{title}</h2>
            <img
                src={screenshot}
                alt={`${title} screenshot`}
                onClick={() => setImgOpen((prev) => !prev)}
                className={`border border-neutral-200 p-2 rounded-2xl ${imgOpen ? "w-2xl" : "w-64"} `}
            />
            <p className="text-center w-2/3">{description}</p>
            <div className="flex gap-2">
                {techIcons?.map((icon) => {
                    return (
                        <div key={icon} className="relative">
                            <TechIcon icon={icon} />
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap gap-3 max-w-64 justify-center">
                {apisUsed?.map((api) => {
                    return (
                        <div key={api} className="relative">
                            <ApiIcon api={api} />
                        </div>
                    );
                })}
            </div>
            <div className="flex">
                <a href={githubLink}>
                    <button className="p-2 rounded-4xl bg-neutral-900 hover:bg-neutral-950 hover:cursor-pointer">
                        View GitHub
                    </button>
                </a>
                {hostedLink && (
                    <a href={hostedLink}>
                        <button className="p-2 rounded-4xl bg-neutral-900 hover:bg-neutral-950 hover:cursor-pointer">
                            View Project
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}
