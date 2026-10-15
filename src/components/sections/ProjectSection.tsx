import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";

export default function ProjectSection() {
    return (
        <section className="flex scroll-mt-28 flex-col gap-8" id="projects">
            <h2 className="text-center text-3xl md:text-4xl">Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project: Project) => {
                    return <ProjectCard key={project.title} project={project} />;
                })}
            </div>
        </section>
    );
}
