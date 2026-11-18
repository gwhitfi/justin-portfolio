import { external } from "../projects/styles";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_REPO_URL } from "../../data/profile";

// The vertical padding is tap area; the negative margin keeps the line spacing unchanged.
const link = "-my-2 inline-block rounded-sm py-2 underline-offset-4 transition hover:text-accent hover:underline";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-xs text-muted sm:flex-row">
            <p className="text-center sm:text-left">
                © 2026 Justin Whitfield · Built with React, Vite, and Tailwind CSS ·{" "}
                <a href={SITE_REPO_URL} {...external} className={link}>
                    Source
                </a>
            </p>
            <nav aria-label="Elsewhere" className="flex gap-4">
                <a href={`mailto:${EMAIL}`} className={link}>
                    Email
                </a>
                <a href={GITHUB_URL} {...external} className={link}>
                    GitHub
                </a>
                <a href={LINKEDIN_URL} {...external} className={link}>
                    LinkedIn
                </a>
            </nav>
        </footer>
    );
}
