// Fails the build if the resume PDF runs past one page.
// It builds the real PDF from src/data/resume.ts with the same ResumeDocument the "Download PDF" button uses.
// Run it on its own with: npm run check:resume
import { createServer } from "vite";
import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";

const MAX_PAGES = 1;
const vite = await createServer({ logLevel: "error", server: { middlewareMode: true }, appType: "custom" });

try {
    const { default: ResumeDocument } = await vite.ssrLoadModule("/src/components/resume/ResumeDocument.tsx");
    const { resume } = await vite.ssrLoadModule("/src/data/resume.ts");

    const countPages = async () => {
        const pdf = (await renderToBuffer(createElement(ResumeDocument))).toString("latin1");
        return (pdf.match(/\/Type\s*\/Page\b(?!s)/g) ?? []).length;
    };

    const pages = await countPages();
    if (pages > MAX_PAGES) {
        console.error(`\n✖ Resume PDF is ${pages} pages (limit ${MAX_PAGES}).`);
        console.error("  Trim bullets in src/data/resume.ts, or move extra detail into `details` (web only) or mark an entry `pdf: false`.\n");
        process.exitCode = 1;
    } else {
        // See how much room is left by adding one-line filler bullets to the last entry until the PDF overflows.
        const last = resume.experience.at(-1);
        const original = last.bullets;
        let spare = 0;
        while (spare < 60) {
            last.bullets = [...original, ...Array.from({ length: spare + 1 }, (_, i) => `filler ${i}`)];
            if ((await countPages()) > MAX_PAGES) break;
            spare++;
        }
        last.bullets = original;
        console.log(`✔ Resume PDF fits on ${pages} page (about ${spare} line${spare === 1 ? "" : "s"} of room left).`);
    }
} finally {
    await vite.close();
}
