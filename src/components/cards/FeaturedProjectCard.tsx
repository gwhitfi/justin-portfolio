import { useState } from "react";
import type { Project } from "../../data/projects";
import ProjectStack from "../projects/ProjectStack";
import ProjectLinks from "../projects/ProjectLinks";
import ProjectNotes from "../projects/ProjectNotes";
import Lightbox from "../projects/Lightbox";
import ScreenshotButton from "../projects/ScreenshotButton";
import { external, textLink } from "../projects/styles";

// Phone and tablet: title, summary and buttons first, then the gallery, the engineering details and the stack.
// lg: gallery on the left beside the title, summary and buttons; details and stack in a row below, on the same columns.
// xl: the stack moves up between the summary and the buttons, and the details take the full width of the bottom row.
// The 1fr row is the slack beside the gallery, so the title and summary stay together at the top.
export default function FeaturedProjectCard({ project }: { project: Project }) {
    const { title, description, status, screenshot, gallery, highlights, ciLink } = project;
    const shots = gallery?.length ? gallery : screenshot ? [{ src: screenshot, caption: title }] : [];
    const [active, setActive] = useState(0);
    const [imgOpen, setImgOpen] = useState(false);
    const current = shots[active];

    return (
        <article className="grid grid-cols-[minmax(0,1fr)] rounded-2xl border border-accent/40 bg-surface/80 shadow-lg shadow-accent/5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:grid-rows-[auto_auto_1fr_auto_auto]">
            <div className="flex flex-col gap-3 px-5 pt-5 lg:col-start-2 lg:row-start-1 lg:px-6 lg:pt-6">
                <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-medium text-accent">
                    Featured project
                </span>
                <h3 className="text-2xl">{title}</h3>
            </div>

            <div className="flex flex-col gap-4 px-5 pt-3 lg:col-start-2 lg:row-start-2 lg:px-6">
                <p className="leading-relaxed text-body">{description}</p>
                {status && (
                    <p className="flex gap-2 font-mono text-xs text-accent">
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" aria-hidden="true" />
                        {status}
                    </p>
                )}
            </div>

            <div className="px-5 pt-4 pb-5 lg:col-start-2 lg:row-start-4 lg:px-6 lg:pb-6">
                <ProjectLinks project={project} variant="buttons" />
            </div>

            {current && (
                <div className="flex flex-col gap-3 border-y border-ink/10 p-5 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:border-y-0 lg:border-r lg:p-6">
                    {/* Contained, not cropped: a screenshot wider than the frame keeps its edges. */}
                    <ScreenshotButton
                        src={current.src}
                        alt={`${title}: ${current.caption}`}
                        label={`Enlarge screenshot: ${current.caption}`}
                        onClick={() => setImgOpen(true)}
                        className="rounded-lg border border-ink/10 bg-page"
                        imageClassName="aspect-[16/10] object-contain"
                    />
                    <p className="text-center text-xs text-muted">{current.caption}</p>
                    {shots.length > 1 && (
                        <div className="-m-1 flex snap-x gap-2 overflow-x-auto p-1 sm:grid sm:grid-cols-5 sm:overflow-visible">
                            {shots.map((shot, i) => (
                                <button
                                    key={shot.caption}
                                    type="button"
                                    onClick={() => setActive(i)}
                                    aria-label={shot.caption}
                                    aria-pressed={i === active}
                                    className={`w-24 shrink-0 cursor-pointer snap-start overflow-hidden rounded-md border transition focus-visible:outline-ink sm:w-auto ${
                                        i === active ? "border-accent ring-1 ring-accent" : "border-ink/15 opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <img src={shot.src} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {highlights && (
                <div className="flex flex-col gap-1 px-5 pt-5 lg:col-start-1 lg:row-start-5 lg:border-t lg:border-ink/10 lg:p-6 xl:col-span-2">
                    <ul className="grid gap-x-8 gap-y-2 text-sm leading-relaxed text-body sm:grid-cols-2">
                        {highlights.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    {ciLink && (
                        <a href={ciLink} {...external} className={`${textLink} -mb-2 w-fit text-accent`}>
                            View CI runs on GitHub →
                        </a>
                    )}
                </div>
            )}

            <div className="flex flex-col px-5 pt-4 pb-5 lg:col-start-2 lg:row-start-5 lg:border-t lg:border-ink/10 lg:p-6 xl:row-start-3 xl:border-t-0 xl:pt-4 xl:pb-0">
                {/* Level with the first detail at lg; resting on the buttons at xl. */}
                <div className="flex flex-col gap-4 xl:mt-auto">
                    <ProjectNotes project={project} />
                    <ProjectStack project={project} />
                </div>
            </div>

            {imgOpen && current && (
                <Lightbox
                    images={shots.map((s) => ({ src: s.src, alt: `${title}: ${s.caption}` }))}
                    index={active}
                    onIndexChange={setActive}
                    onClose={() => setImgOpen(false)}
                />
            )}
        </article>
    );
}
