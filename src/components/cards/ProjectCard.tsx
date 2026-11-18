import { useState } from "react";
import type { Project } from "../../data/projects";
import ProjectStack from "../projects/ProjectStack";
import ProjectLinks from "../projects/ProjectLinks";
import ProjectNotes from "../projects/ProjectNotes";
import Lightbox from "../projects/Lightbox";
import ScreenshotButton from "../projects/ScreenshotButton";
import { card } from "../projects/styles";

export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, screenshot, screenshotPosition } = project;
    const [imgOpen, setImgOpen] = useState(false);
    return (
        <article className={card}>
            {screenshot && (
                <ScreenshotButton
                    src={screenshot}
                    alt={`${title} screenshot`}
                    label={`Enlarge ${title} screenshot`}
                    onClick={() => setImgOpen(true)}
                    lazy
                    className="rounded-t-[calc(var(--radius-2xl)-1px)] border-b border-ink/10"
                    imageClassName={`aspect-video object-cover ${screenshotPosition === "center" ? "object-center" : "object-top"}`}
                />
            )}
            <div className="flex flex-1 flex-col gap-3 p-4 lg:p-5">
                <h3 className="text-lg">{title}</h3>
                <p className="text-sm leading-relaxed text-body">{description}</p>
                <ProjectNotes project={project} />
                <ProjectStack project={project} />
                <ProjectLinks project={project} variant="buttons" />
            </div>
            {imgOpen && screenshot && (
                <Lightbox images={[{ src: screenshot, alt: `${title} screenshot` }]} index={0} onClose={() => setImgOpen(false)} />
            )}
        </article>
    );
}
