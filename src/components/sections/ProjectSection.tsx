import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";

export default function ProjectSection() {
    return (
        <div className="bg-zinc-900/60 border border-white/10 shadow-xl backdrop-blur rounded-3xl p-5 md:p-15" id="projects">
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-4xl md:text-5xl lg:text-6xl">Projects</h2>
                {projects.map((project: Project) => {
                    return <ProjectCard key={project.title} project={project} />;
                })}
            </div>
        </div>
    );
}
