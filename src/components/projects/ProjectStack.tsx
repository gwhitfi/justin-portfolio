import type { Project } from "../../data/projects";
import ServicePill from "../ServicePill";

// Tech chips (icon + name, readable without hovering) on one row, service pills on the next.
export default function ProjectStack({ project }: { project: Project }) {
    return (
        <div className="mt-auto flex flex-col gap-2 pt-1">
            <ul className="flex flex-wrap gap-1.5 font-mono text-xs" aria-label="Tech stack">
                {project.tech.map(({ Icon, label }) => (
                    <li
                        key={label}
                        className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-2 py-0.5 text-body"
                    >
                        <Icon size={12} aria-hidden />
                        {label}
                    </li>
                ))}
            </ul>
            {project.services.length > 0 && (
                <ul className="flex flex-wrap gap-1.5 font-mono text-xs" aria-label="APIs and services">
                    {project.services.map((service) => (
                        <li key={service}>
                            <ServicePill name={service} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
