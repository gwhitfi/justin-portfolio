import { EMAIL, GITHUB_URL, LINKEDIN_URL, WORK_ORDER_FOX_URL } from "./profile";

// One source for the resume page and the generated PDF.
// - Everything renders on the page.
// - `pdf: false` on an entry keeps it off the PDF (web only).
// - `details` are the expandable "more detail" lists: always web only, so the PDF stays one page.
// - `pdfOnly` contact fields (the phone number) are printed in the PDF but not shown on the public page.

export interface ResumeLink {
    label: string;
    href: string;
}

export interface ResumeEntry {
    id: string;
    title: string;
    subtitle?: string;
    meta?: string;
    links?: ResumeLink[];
    bullets: string[];
    details?: string[];
    pdf?: boolean;
}

export interface SkillGroup {
    label: string;
    items: string;
    pdf?: boolean;
}

export interface Resume {
    name: string;
    headline: string;
    contact: {
        email: string;
        phone: { value: string; pdfOnly: true };
        location: string;
        availability: string;
        links: ResumeLink[];
    };
    summary: string;
    skills: SkillGroup[];
    projects: ResumeEntry[];
    education: ResumeEntry[];
    experience: ResumeEntry[];
}

export const resume: Resume = {
    name: "Justin Whitfield",
    headline: "Software Developer",
    contact: {
        email: EMAIL,
        phone: { value: "864-245-5256", pdfOnly: true },
        location: "Anderson, SC",
        availability: "Available full-time, on-site in Greenville, SC",
        links: [
            { label: "GitHub", href: GITHUB_URL },
            { label: "LinkedIn", href: LINKEDIN_URL },
            { label: "Portfolio", href: "https://justinwhitfield.dev" },
        ],
    },
    summary:
        "Software developer with a B.S. in Computer Science (WGU, 2026). I built and run Work Order Fox, a multi-tenant SaaS that my property management business uses daily. I bring nearly 15 years in real estate and online retail, with experience in bookkeeping, accounting, inventory management, and coordinating shipping with USPS, UPS, and FedEx. I have a solid understanding of software engineering fundamentals and use Claude Code and Codex every day to learn and ship faster, and I review and understand everything I ship. I especially enjoy building MCP servers and agentic features. Looking for a junior software engineering role.",
    skills: [
        { label: "Languages", items: "Python, TypeScript, JavaScript, SQL, C++, Rust, HTML, CSS, Java, C#" },
        { label: "Frontend", items: "React, Next.js, Tailwind CSS, Bootstrap" },
        {
            label: "Backend & Data",
            items: "PostgreSQL, MySQL, Prisma, REST APIs, Node.js, OAuth 2.0/PKCE, scheduled jobs, and web crawling",
        },
        {
            label: "AI & Dev Tools",
            items: "Claude Code, Codex, MCP servers, Git, GitHub Actions, Vitest, Linux (Ubuntu, Arch, WSL), Postman",
        },
        { label: "Cloud & Hosting", items: "Vercel, Neon, Netlify, AWS (coursework)" },
        { label: "Certifications", items: "Linux Essentials, ITIL 4 Foundations" },
        { label: "Spoken Languages", items: "English (native), German (B1/B2)" },
    ],
    projects: [
        {
            id: "work-order-fox",
            title: "Work Order Fox",
            subtitle: "TypeScript, React, Next.js, Tailwind CSS, PostgreSQL, Prisma, Clerk, Vercel, Neon",
            links: [
                { label: "GitHub", href: "https://github.com/gwhitfi/workorderfox" },
                { label: "Live Demo", href: `${WORK_ORDER_FOX_URL}/demo` },
            ],
            bullets: [
                "Built a multi-tenant SaaS platform that lets property managers create, assign, and track contractor work orders. We use it every day in our property management business.",
                "Designed a normalized PostgreSQL schema and scoped every query to the user's organization, with Zod validation at every server boundary.",
                "Built a remote MCP server with organization-scoped API keys so AI assistants like Claude Code can search, create, and update work orders, plus Fox Bot, which uses Claude to draft a work order from a plain-English description.",
            ],
            details: [
                "Contractors get a link to check off line items from their phone, with no account or app required.",
                "Work orders are organized into areas and line items with priorities, and up to three photos per line item stored in Vercel Blob.",
                "Every office and contractor action is written to an activity log, and tenants can be notified by email through Resend.",
                "88 Vitest test files, with type checks, lint, tests, and a production build running in GitHub Actions CI.",
            ],
        },
        {
            id: "job-scraper",
            title: "Job Scraper",
            subtitle: "Python, scheduled crawling, JSON storage, AI agent filtering (Jev by TypeSafe AI, Claude Sonnet), web UI",
            links: [{ label: "GitHub", href: "https://github.com/gwhitfi/job-scraper" }],
            bullets: [
                "Built a scheduled Python pipeline that crawls 50+ company career pages every 2 hours, follows each site's robots.txt rules, and collects postings that match my search filters.",
                "Added an AI agent as a second filter that checks each posting against my job criteria.",
                "Built a Python web interface for browsing results and reading crawl logs to monitor the pipeline and track down errors.",
            ],
            details: [
                "18 custom platform adapters for job listing hosts like Workday, SuccessFactors, Oracle HCM, and BambooHR.",
                "Flags duplicate postings across job boards so the same job isn't reviewed twice.",
            ],
        },
        {
            id: "setlist-playlist",
            title: "Setlist.fm to Spotify Playlist",
            subtitle:
                "TypeScript, React, Tailwind CSS, OAuth 2.0/PKCE, Netlify. APIs: Spotify, Setlist.fm, Last.fm, MusicBrainz, Fanart.tv",
            links: [{ label: "GitHub", href: "https://github.com/gwhitfi/SpotifyPlaylist" }],
            bullets: [
                "Integrated five REST APIs to turn an artist's recent live setlists into a Spotify playlist.",
                "Implemented Spotify OAuth 2.0 login with PKCE and automatic token refresh, plus debounced artist search and setlist sorting and filtering.",
            ],
        },
        {
            id: "cfb-manager",
            title: "CFB Manager",
            subtitle: "C++, TypeScript, Claude Code/Codex",
            links: [{ label: "GitHub", href: "https://github.com/gwhitfi/cfb-sim" }],
            bullets: [
                "Designed a college football management sim with a C++ game engine and a TypeScript viewer that runs in the browser.",
                "Built playable games where the user calls plays and makes coaching decisions, plus a custom play editor and tools for testing matchups.",
            ],
            details: [
                "The engine plays out every snap, and results are tuned to match realistic football games.",
                "Each play can be watched as it unfolds in the browser viewer.",
            ],
        },
        {
            id: "package-delivery",
            title: "Package Delivery Simulation",
            subtitle: "Python, WGU coursework",
            bullets: ["Routes package deliveries with a nearest neighbor algorithm and a custom hash table written in Python."],
        },
        {
            id: "wintrellis",
            title: "WinTrellis",
            subtitle: "Rust, Win32, Claude Code/Codex",
            links: [{ label: "GitHub", href: "https://github.com/gwhitfi/wintrellis" }],
            bullets: [
                "Tiling window manager for Windows that automatically snaps windows into place and supports workspaces and keyboard shortcuts.",
            ],
            details: [
                "Listens for keyboard shortcuts and for windows opening and closing across all of Windows, so tiling happens instantly.",
                "Saves a note of every window before hiding it, so even a crash never loses one.",
            ],
        },
        {
            id: "file-sorter",
            title: "File Sorter",
            subtitle: "C++, Win32, Claude Code/Codex",
            links: [{ label: "GitHub", href: "https://github.com/gwhitfi/file-sorter" }],
            bullets: ["Desktop app for sorting a cluttered folder into preset destination folders, one file at a time."],
            details: [
                "Moves never overwrite an existing file, moves across drives delete the original only after the copy succeeds, and Ctrl+Z undoes the last move.",
            ],
        },
    ],
    education: [
        { id: "wgu", title: "Western Governors University", subtitle: "Bachelor of Science, Computer Science", meta: "2026", bullets: [] },
        { id: "clemson", title: "Clemson University", subtitle: "Bachelor of Arts, History", meta: "2012", bullets: [] },
    ],
    experience: [
        {
            id: "glendell",
            title: "Glendell Builders, Inc. / Self Employed",
            subtitle: "Vice President / Owner",
            meta: "May 2012 – Present",
            bullets: [
                "Manage up to 100 rental units, including scheduling maintenance contractors and tracking repair work orders. Work Order Fox grew out of this work.",
                "Run our property management, accounting, tax, and payroll software and oversee tenant accounts, construction, renovations, and rentals.",
            ],
        },
        {
            id: "connoisseur",
            title: "The Connoisseur, CC.LTD",
            subtitle: "Logistics Manager",
            meta: "May 2012 – Present",
            bullets: [
                "Designed and maintained an inventory database integrated with sales data to inform resupply orders.",
                "Managed domestic and international shipping of 300+ products daily to Amazon fulfillment warehouses.",
            ],
        },
        {
            id: "clemson-venues",
            title: "Clemson University",
            subtitle: "Associate Director of Venue Operations",
            meta: "Dec 2010 – May 2012",
            bullets: ["Managed a staff of 8 to 12 setting up customer and university events across campus."],
        },
    ],
};

export const inPdf = <T extends { pdf?: boolean }>(item: T): boolean => item.pdf !== false;
