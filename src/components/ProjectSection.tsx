import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

export default function ProjectSection() {
    return (
        <div className="" id="projects">
            <h2 className="text-white text-3xl text-center mb-4">Projects</h2>
            <div className="flex flex-col xl:flex-row gap-3">
                {projects.map((project: Project) => {
                    return <ProjectCard key={project.title} project={project} />;
                })}
            </div>
        </div>
    );
}
