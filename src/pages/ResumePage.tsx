import { useEffect, useState } from "react";
import { ChevronDown, Download, ExternalLink, FileText, MapPin } from "lucide-react";
import { inPdf, resume, type ResumeEntry } from "../data/resume";
import { external, primaryButton, secondaryButton } from "../components/projects/styles";

const PDF_NAME = "Justin_Whitfield_Resume.pdf";

// The PDF library is only downloaded when someone asks for the PDF.
async function makePdf(): Promise<Blob> {
    const { generateResumePdf } = await import("../components/resume/generatePdf");
    return generateResumePdf();
}

function WebOnly() {
    return (
        <span className="inline-block w-fit rounded-full border border-ink/15 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-muted uppercase">
            Web only
        </span>
    );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id} className="flex items-center gap-3 text-lg font-semibold">
            {children}
            <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
        </h2>
    );
}

function EntryLinks({ entry }: { entry: ResumeEntry }) {
    if (!entry.links?.length) return null;
    return (
        <span className="flex flex-wrap gap-x-3 gap-y-1">
            {entry.links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    {...external}
                    className="inline-flex items-center gap-1 font-mono text-xs font-medium text-accent underline-offset-4 hover:underline"
                >
                    {link.label}
                    <ExternalLink size={11} aria-hidden="true" />
                </a>
            ))}
        </span>
    );
}

// One resume entry: title row, bullets (also in the PDF) and, if it has any, an expandable web-only detail list.
function Entry({ entry, open, onToggle }: { entry: ResumeEntry; open: boolean; onToggle: () => void }) {
    const detailsId = `${entry.id}-details`;
    return (
        <article className="flex flex-col gap-2 rounded-2xl border border-ink/10 bg-surface/80 p-4 shadow-xs sm:p-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base">{entry.title}</h3>
                    <EntryLinks entry={entry} />
                    {!inPdf(entry) && <WebOnly />}
                </div>
                {entry.meta && <p className="shrink-0 font-mono text-xs text-muted">{entry.meta}</p>}
            </div>
            {entry.subtitle && <p className="text-sm text-muted italic">{entry.subtitle}</p>}
            {entry.bullets.length > 0 && (
                <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-body">
                    {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            )}
            {entry.details && (
                <div className="mt-1">
                    <button
                        type="button"
                        onClick={onToggle}
                        aria-expanded={open}
                        aria-controls={detailsId}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full py-1 font-mono text-xs font-medium text-accent transition hover:brightness-110"
                    >
                        <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                        {open ? "Less detail" : "More detail"}
                    </button>
                    {/* Grid-rows trick: animates the height open and closed without measuring it. */}
                    <div
                        id={detailsId}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                        <div className="overflow-hidden" inert={!open}>
                            <div className="mt-2 flex flex-col gap-2 rounded-xl border border-dashed border-ink/15 bg-page/60 p-3">
                                <WebOnly />
                                <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-body">
                                    {entry.details.map((detail) => (
                                        <li key={detail} className="flex gap-2">
                                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ink/30" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}

export default function ResumePage() {
    const [openIds, setOpenIds] = useState<Set<string>>(new Set());
    const [busy, setBusy] = useState<"download" | "view" | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Resume | Justin Whitfield";
        window.scrollTo({ top: 0 });
    }, []);

    const expandable = [...resume.projects, ...resume.experience].filter((e) => e.details?.length).map((e) => e.id);
    const allOpen = expandable.every((id) => openIds.has(id));
    const toggle = (id: string) =>
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    const entryProps = (entry: ResumeEntry) => ({ entry, open: openIds.has(entry.id), onToggle: () => toggle(entry.id) });

    async function download() {
        setBusy("download");
        setError(null);
        try {
            const url = URL.createObjectURL(await makePdf());
            const a = document.createElement("a");
            a.href = url;
            a.download = PDF_NAME;
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 10_000);
        } catch {
            setError("Couldn't create the PDF. Please try again.");
        } finally {
            setBusy(null);
        }
    }

    async function view() {
        // Open the tab right away (inside the click) so popup blockers allow it, then point it at the PDF.
        const tab = window.open("", "_blank");
        setBusy("view");
        setError(null);
        try {
            const url = URL.createObjectURL(await makePdf());
            if (tab) tab.location.href = url;
            else window.location.href = url;
            setTimeout(() => URL.revokeObjectURL(url), 60_000);
        } catch {
            tab?.close();
            setError("Couldn't create the PDF. Please try again.");
        } finally {
            setBusy(null);
        }
    }

    const { contact } = resume;

    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 pt-6 md:pt-8">
            <header className="flex flex-col gap-5 rounded-2xl border border-ink/10 bg-surface/80 p-5 shadow-xs sm:p-7">
                <div className="flex flex-col gap-1">
                    <p className="font-mono text-xs font-medium tracking-wide text-accent uppercase">Resume</p>
                    <h1 className="text-3xl md:text-4xl">{resume.name}</h1>
                    <p className="text-lg text-body">{resume.headline}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <p className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <a href={`mailto:${contact.email}`} className="font-medium text-accent underline-offset-4 hover:underline">
                            {contact.email}
                        </a>
                        {contact.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                {...external}
                                className="inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
                            >
                                {link.label}
                                <ExternalLink size={12} aria-hidden="true" />
                            </a>
                        ))}
                    </p>
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted">
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} aria-hidden="true" />
                            {contact.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{contact.availability}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                        <button type="button" onClick={download} disabled={busy !== null} className={`${primaryButton} cursor-pointer disabled:opacity-70`}>
                            <Download size={16} aria-hidden="true" />
                            {busy === "download" ? "Preparing PDF…" : "Download PDF"}
                        </button>
                        <button type="button" onClick={view} disabled={busy !== null} className={`${secondaryButton} cursor-pointer disabled:opacity-70`}>
                            <FileText size={16} aria-hidden="true" />
                            {busy === "view" ? "Opening…" : "View PDF"}
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpenIds(allOpen ? new Set() : new Set(expandable))}
                        aria-pressed={allOpen}
                        className="inline-flex cursor-pointer items-center gap-1.5 self-start rounded-full py-1 font-mono text-xs font-medium text-accent sm:self-auto"
                    >
                        <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-200 ${allOpen ? "rotate-180" : ""}`} />
                        {allOpen ? "Collapse all" : "Expand all"}
                    </button>
                </div>
                <p className="text-xs text-muted">
                    The PDF is generated from this page, so the two always match. Sections marked <WebOnly /> are extra detail
                    that only appears here.
                </p>
                <p role="status" aria-live="polite" className="text-sm text-red-700 empty:hidden">
                    {error}
                </p>
            </header>

            <section aria-labelledby="resume-summary" className="flex flex-col gap-3">
                <SectionHeading id="resume-summary">Summary</SectionHeading>
                <p className="leading-relaxed text-body">{resume.summary}</p>
            </section>

            <section aria-labelledby="resume-skills" className="flex flex-col gap-3">
                <SectionHeading id="resume-skills">Skills &amp; Certifications</SectionHeading>
                <dl className="grid gap-x-6 gap-y-3 rounded-2xl border border-ink/10 bg-surface/60 p-5 text-sm sm:grid-cols-[auto_1fr] sm:gap-y-2.5">
                    {resume.skills.map((group) => (
                        <div key={group.label} className="flex flex-col gap-1 sm:contents">
                            <dt className="font-mono text-xs font-medium text-accent sm:pt-0.5">{group.label}</dt>
                            <dd className="text-body">{group.items}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section aria-labelledby="resume-projects" className="flex flex-col gap-3">
                <SectionHeading id="resume-projects">Projects</SectionHeading>
                <div className="flex flex-col gap-3">
                    {resume.projects.map((entry) => (
                        <Entry key={entry.id} {...entryProps(entry)} />
                    ))}
                </div>
            </section>

            <section aria-labelledby="resume-experience" className="flex flex-col gap-3">
                <SectionHeading id="resume-experience">Work Experience</SectionHeading>
                <div className="flex flex-col gap-3">
                    {resume.experience.map((entry) => (
                        <Entry key={entry.id} {...entryProps(entry)} />
                    ))}
                </div>
            </section>

            <section aria-labelledby="resume-education" className="flex flex-col gap-3">
                <SectionHeading id="resume-education">Education</SectionHeading>
                <div className="grid gap-3 sm:grid-cols-2">
                    {resume.education.map((entry) => (
                        <Entry key={entry.id} {...entryProps(entry)} />
                    ))}
                </div>
            </section>
        </div>
    );
}
