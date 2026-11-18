import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "../cards/ProjectCard";
import FeaturedProjectCard from "../cards/FeaturedProjectCard";
import CompactProjectCard from "../cards/CompactProjectCard";
import { projects } from "../../data/projects";
import { secondaryButton } from "../projects/styles";

export default function ProjectSection() {
    const featured = projects.filter((p) => p.tier === "featured");
    const highlights = projects.filter((p) => p.tier === "highlight");
    const others = projects.filter((p) => p.tier === "earlier");
    // On phones the earlier projects start folded away to keep the page short; wider screens always show them.
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="flex scroll-mt-20 flex-col gap-8" id="projects">
            <h2 className="text-center text-2xl md:text-3xl">Projects</h2>
            <div className="flex flex-col gap-4">
                {featured.map((project) => (
                    <FeaturedProjectCard key={project.title} project={project} />
                ))}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {highlights.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex min-h-10 items-center justify-between gap-4">
                    <h3 className="text-lg">Earlier projects</h3>
                    <button
                        type="button"
                        onClick={() => setShowMore((v) => !v)}
                        aria-expanded={showMore}
                        aria-controls="more-projects"
                        className={`cursor-pointer sm:hidden ${secondaryButton}`}
                    >
                        {showMore ? "Hide" : `Show ${others.length}`}
                        <ChevronDown size={16} aria-hidden="true" className={`transition ${showMore ? "rotate-180" : ""}`} />
                    </button>
                </div>
                <div
                    id="more-projects"
                    className={`${showMore ? "grid" : "hidden"} grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3`}
                >
                    {others.map((project, i) => (
                        <CompactProjectCard
                            key={project.title}
                            project={project}
                            wideOnTablet={others.length % 2 === 1 && i === others.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
