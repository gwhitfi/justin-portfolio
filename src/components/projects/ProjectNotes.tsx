import type { Project } from "../../data/projects";

// The "technical highlight" line shared by every card.
export default function ProjectNotes({ project }: { project: Project }) {
    const { hardPart } = project;
    if (!hardPart) return null;
    return (
        <dl className="flex flex-col gap-0.5 text-sm leading-relaxed">
            <dt className="font-mono text-xs font-medium text-accent">Technical highlight</dt>
            <dd className="text-body">{hardPart}</dd>
        </dl>
    );
}
