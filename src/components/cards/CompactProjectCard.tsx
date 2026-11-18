import { useState } from "react";
import type { Project } from "../../data/projects";
import ProjectStack from "../projects/ProjectStack";
import ProjectLinks from "../projects/ProjectLinks";
import ProjectNotes from "../projects/ProjectNotes";
import Lightbox from "../projects/Lightbox";
import ScreenshotButton from "../projects/ScreenshotButton";
import { card } from "../projects/styles";

interface CompactProjectCardProps {
    project: Project;
    // In the two-column tablet grid, a card left alone on the last row spans both columns
    // with its screenshot beside the text instead of leaving half the row empty.
    wideOnTablet?: boolean;
}

export default function CompactProjectCard({ project, wideOnTablet = false }: CompactProjectCardProps) {
    const { title, description, screenshot, screenshotPosition } = project;
    const [imgOpen, setImgOpen] = useState(false);
    return (
        <article className={`${card} ${wideOnTablet ? "sm:max-lg:col-span-2 sm:max-lg:flex-row" : ""}`}>
            {screenshot && (
                <ScreenshotButton
                    src={screenshot}
                    alt={`${title} screenshot`}
                    label={`Enlarge ${title} screenshot`}
                    onClick={() => setImgOpen(true)}
                    lazy
                    className={`rounded-t-[calc(var(--radius-2xl)-1px)] border-b border-ink/10 ${
                        wideOnTablet
                            ? "sm:max-lg:w-2/5 sm:max-lg:shrink-0 sm:max-lg:rounded-l-[calc(var(--radius-2xl)-1px)] sm:max-lg:rounded-tr-none sm:max-lg:border-r sm:max-lg:border-b-0"
                            : ""
                    }`}
                    imageClassName={`aspect-[3/2] object-cover ${screenshotPosition === "center" ? "object-center" : "object-top"} ${
                        wideOnTablet ? "sm:max-lg:absolute sm:max-lg:inset-0 sm:max-lg:aspect-auto sm:max-lg:h-full" : ""
                    }`}
                />
            )}
            <div className="flex flex-1 flex-col gap-3 p-4 lg:p-5">
                <h4 className="text-base">{title}</h4>
                <p className="text-sm leading-relaxed text-body">{description}</p>
                <ProjectNotes project={project} />
                <ProjectStack project={project} />
                <ProjectLinks project={project} variant="text" />
            </div>
            {imgOpen && screenshot && (
                <Lightbox images={[{ src: screenshot, alt: `${title} screenshot` }]} index={0} onClose={() => setImgOpen(false)} />
            )}
        </article>
    );
}
