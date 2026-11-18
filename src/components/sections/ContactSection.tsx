import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import LocationLine from "../LocationLine";
import { external, primaryButton, secondaryButton } from "../projects/styles";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/profile";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const timer = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(timer.current), []);

    async function copy() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return (
        <section id="contact" className="flex scroll-mt-20 flex-col items-center gap-8 border-t border-ink/10 pt-12">
            <h2 className="text-2xl md:text-3xl">Contact</h2>
            <div className="flex flex-col items-center gap-4 text-center">
                <p className="leading-relaxed text-body">
                    The best way to reach me is email. I'm open to junior software engineering roles.
                </p>
                <LocationLine className="items-center justify-center" />
                <p className="font-mono text-ink select-all">{EMAIL}</p>
                <div className="flex flex-wrap justify-center gap-2">
                    <a href={`mailto:${EMAIL}`} className={primaryButton}>
                        Email me
                    </a>
                    {/* Both labels share one grid cell, so the button keeps its width when the label changes. */}
                    <button type="button" onClick={copy} className={`cursor-pointer ${secondaryButton}`}>
                        {copied ? <Check size={16} aria-hidden="true" className="text-accent" /> : <Copy size={16} aria-hidden="true" />}
                        <span className="grid">
                            <span className={`col-start-1 row-start-1 ${copied ? "invisible" : ""}`}>Copy address</span>
                            <span className={`col-start-1 row-start-1 ${copied ? "" : "invisible"}`}>Copied</span>
                        </span>
                    </button>
                    <a href={LINKEDIN_URL} {...external} className={secondaryButton}>
                        LinkedIn
                    </a>
                    <a href={GITHUB_URL} {...external} className={secondaryButton}>
                        GitHub
                    </a>
                </div>
                <span role="status" className="sr-only">
                    {copied ? "Email address copied" : ""}
                </span>
                <p className="text-sm text-muted">
                    Résumé available on request.{" "}
                    <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent("Résumé request")}`}
                        className="text-accent underline underline-offset-4 decoration-accent/40 transition hover:decoration-accent"
                    >
                        Ask by email
                    </a>
                </p>
            </div>
        </section>
    );
}
