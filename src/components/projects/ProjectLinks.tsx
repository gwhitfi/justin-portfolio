import type { Project } from "../../data/projects";

import { external, primaryButton, secondaryButton, textLink } from "./styles";

const privateNote = "Private repo · code walkthrough on request";

// "buttons" for cards with room for them, "text" for the compact cards.
// With a demo link, the demo is the main button and the live site becomes secondary.
export default function ProjectLinks({ project, variant }: { project: Project; variant: "buttons" | "text" }) {
    const { title, githubLink, hostedLink, demoLink } = project;
    if (variant === "text") {
        return (
            <div className="-mb-2 flex flex-wrap gap-x-4">
                {githubLink ? (
                    <a href={githubLink} {...external} aria-label={`${title} on GitHub`} className={`${textLink} text-body hover:text-ink`}>
                        GitHub →
                    </a>
                ) : (
                    <span className="py-2 font-mono text-xs font-medium text-muted">{privateNote}</span>
                )}
                {hostedLink && (
                    <a href={hostedLink} {...external} aria-label={`${title} live site`} className={`${textLink} text-accent`}>
                        Live site →
                    </a>
                )}
            </div>
        );
    }
    return (
        <div className="flex flex-wrap gap-2">
            {demoLink && (
                <a href={demoLink} {...external} aria-label={`Try the ${title} demo, no signup`} className={`basis-full ${primaryButton}`}>
                    Try the demo · no signup
                </a>
            )}
            {githubLink ? (
                <a href={githubLink} {...external} aria-label={`${title} on GitHub`} className={`flex-1 ${secondaryButton}`}>
                    GitHub
                </a>
            ) : (
                <span className="flex min-h-10 flex-1 items-center justify-center rounded-full border border-dashed border-ink/15 px-4 py-2 text-center font-mono text-xs text-muted">
                    {privateNote}
                </span>
            )}
            {hostedLink && (
                <a
                    href={hostedLink}
                    {...external}
                    aria-label={`${title} live site`}
                    className={`flex-1 ${demoLink ? secondaryButton : primaryButton}`}
                >
                    Live site
                </a>
            )}
        </div>
    );
}
