import type { ComponentType } from "react";
import {
    SiCplusplus,
    SiCss,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from "@icons-pack/react-simple-icons";
import { Grid2x2 } from "lucide-react";
import JobScraper from "../assets/JobScraper.webp";
import FileSorter from "../assets/FileSorter.webp";
import WinTrellis from "../assets/WinTrellis.webp";
import CFBSim from "../assets/CFBSim.webp";
import SetlistPlaylist from "../assets/SetlistPlaylist.webp";
import WeatherSimple from "../assets/WeatherSimple.webp";
import Chess from "../assets/Chess.webp";
import WorkOrderFoxHome from "../assets/WorkOrderFox/WorkOrderFoxHome.webp";
import WorkOrderFoxWorkOrder from "../assets/WorkOrderFox/WorkOrderFoxWorkOrder.webp";
import WorkOrderFoxList from "../assets/WorkOrderFox/WorkOrderFoxList.webp";
import WorkOrderFoxFoxBot from "../assets/WorkOrderFox/WorkOrderFoxFoxBot.webp";
import WorkOrderFoxMcp from "../assets/WorkOrderFox/WorkOrderFoxMcp.webp";

// featured: the large card · highlight: image cards · earlier: the smaller "Earlier projects" row.
export type ProjectTier = "featured" | "highlight" | "earlier";

export interface Screenshot {
    src: string;
    caption: string;
}

export interface Tech {
    Icon: ComponentType<{ className?: string; size?: number | string; "aria-hidden"?: boolean }>;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    tier: ProjectTier;
    screenshot?: string;
    // Which part of a tall screenshot to keep when it's cropped into a thumbnail.
    screenshotPosition?: "top" | "center";
    gallery?: Screenshot[];
    githubLink?: string;
    hostedLink?: string;
    // A no-signup demo, shown as the main button when present.
    demoLink?: string;
    // One line on how the project is used today, shown on the featured card.
    status?: string;
    // Short engineering bullets shown on the featured card.
    highlights?: string[];
    // Public CI runs backing the test claims.
    ciLink?: string;
    // One standout technical detail, in one or two sentences.
    hardPart?: string;
    tech: Tech[];
    services: string[];
}

const TECH = {
    typescript: { Icon: SiTypescript, label: "TypeScript" },
    javascript: { Icon: SiJavascript, label: "JavaScript" },
    react: { Icon: SiReact, label: "React" },
    nextjs: { Icon: SiNextdotjs, label: "Next.js" },
    vite: { Icon: SiVite, label: "Vite" },
    tailwind: { Icon: SiTailwindcss, label: "Tailwind CSS" },
    postgresql: { Icon: SiPostgresql, label: "PostgreSQL" },
    prisma: { Icon: SiPrisma, label: "Prisma" },
    python: { Icon: SiPython, label: "Python" },
    rust: { Icon: SiRust, label: "Rust" },
    cplusplus: { Icon: SiCplusplus, label: "C++" },
    windows: { Icon: Grid2x2, label: "Windows" },
    html: { Icon: SiHtml5, label: "HTML" },
    css: { Icon: SiCss, label: "CSS" },
} satisfies Record<string, Tech>;

export const projects: Project[] = [
    {
        title: "Work Order Fox",
        description:
            "Work order software for landlords and property managers. Build a work order room by room, send the contractor a link to check off the work from their phone with no app required, and track progress as it gets done.",
        status: "In daily use in our property management business since October 2026.",
        highlights: [
            "Multi-tenant: every query is scoped to the user's organization, with Zod validation at every server boundary.",
            "Fox Bot: Claude Haiku 5.5 turns a plain-English description into a draft work order for review.",
            "Remote MCP server: organization-scoped API keys let AI assistants like Claude Code search, create, and update work orders.",
            "88 Vitest test files, with type checks, lint, tests, and a production build in GitHub Actions CI.",
        ],
        ciLink: "https://github.com/gwhitfi/workorderfox/actions/workflows/ci.yml",
        tier: "featured",
        screenshot: WorkOrderFoxWorkOrder,
        gallery: [
            { src: WorkOrderFoxWorkOrder, caption: "A work order: areas, line items, and priorities" },
            { src: WorkOrderFoxList, caption: "Work orders grouped by status, with overdue dates flagged" },
            { src: WorkOrderFoxFoxBot, caption: "Fox Bot: describe the job and get a draft work order" },
            { src: WorkOrderFoxMcp, caption: "MCP: Claude Code drafts a work order through the API" },
            { src: WorkOrderFoxHome, caption: "Landing page" },
        ],
        githubLink: "https://github.com/gwhitfi/workorderfox",
        hostedLink: "https://www.workorderfox.com",
        demoLink: "https://www.workorderfox.com/demo",
        tech: [TECH.typescript, TECH.nextjs, TECH.react, TECH.tailwind, TECH.postgresql, TECH.prisma],
        services: ["Claude API", "Clerk", "Resend", "Vercel Blob"],
    },
    {
        title: "Job Scraper",
        description:
            "A personal job tracker that crawls company career pages, filters openings by location, and uses Claude Sonnet 5.5 to review fit and estimate pay. A locally hosted dashboard lets me search, star, hide, and track applications.",
        hardPart:
            "18 custom platform adapters for job listing hosts like Workday, SuccessFactors, Oracle HCM, BambooHR, and more. The crawler respects robots.txt and flags duplicate postings across job boards.",
        tier: "highlight",
        screenshot: JobScraper,
        githubLink: "https://github.com/gwhitfi/job-scraper",
        tech: [TECH.python],
        services: ["Claude API"],
    },
    {
        title: "WinTrellis",
        description:
            "A tiling window manager for Windows 11 in the style of Linux tiling managers. Windows snap into fixed layouts, and focus, moves, workspaces, and an app launcher are all driven from the keyboard.",
        hardPart:
            "It listens for your keyboard shortcuts and for windows opening and closing across all of Windows, so tiling happens instantly. Before hiding a window it saves a note of it, so even a crash never loses one, and it never squeezes an app smaller than it can handle.",
        tier: "highlight",
        screenshot: WinTrellis,
        githubLink: "https://github.com/gwhitfi/wintrellis",
        tech: [TECH.rust, TECH.windows],
        services: ["Win32"],
    },
    {
        title: "CFB Manager",
        description:
            "A college football management sim inspired by Sports Interactive's Football Manager. Simulate games or play them out, making the play-calling and coaching decisions yourself.",
        hardPart:
            "A custom C++ engine plays out every snap. Results are tuned to match realistic football games, and you can watch each play unfold in the browser.",
        tier: "highlight",
        screenshot: CFBSim,
        githubLink: "https://github.com/gwhitfi/cfb-sim",
        tech: [TECH.cplusplus, TECH.typescript, TECH.css],
        services: [],
    },
    {
        title: "File Sorter",
        description:
            "A simple Windows tool for cleaning up a messy folder one file at a time. Preview each file, then send it to one of five destinations with a single keypress or mouse click, delete it, or skip it.",
        hardPart:
            "Moves never overwrite (a clash becomes name (2).ext), moves across drives copy in the background and delete the original only after the copy succeeds, and Ctrl+Z undoes the last move.",
        tier: "highlight",
        screenshot: FileSorter,
        githubLink: "https://github.com/gwhitfi/file-sorter",
        tech: [TECH.cplusplus, TECH.windows],
        services: ["Win32"],
    },
    {
        title: "Setlist → Playlist",
        description: "Turns an artist's recent live setlists into a Spotify playlist, using five music APIs.",
        hardPart: "Spotify OAuth 2.0 sign-in with PKCE and automatic token refresh, plus debounced artist search.",
        tier: "earlier",
        screenshot: SetlistPlaylist,
        githubLink: "https://github.com/gwhitfi/SpotifyPlaylist",
        tech: [TECH.typescript, TECH.react, TECH.vite, TECH.tailwind],
        services: ["Spotify", "Setlist.fm", "Last.fm", "MusicBrainz", "Fanart.tv"],
    },
    {
        title: "Simple Weather",
        description: "A weather app that shows the key information without filler.",
        hardPart:
            "Debounced address search, times shown in the searched location's own time zone, and a default location saved in the browser.",
        tier: "earlier",
        screenshot: WeatherSimple,
        githubLink: "https://github.com/gwhitfi/simple-weather",
        hostedLink: "https://weather-simplified.netlify.app/",
        tech: [TECH.typescript, TECH.react, TECH.vite, TECH.tailwind],
        services: ["Open-Meteo", "Google Geocoding"],
    },
    {
        title: "Browser Chess",
        description: "Chess in the browser, for one or two players, against a simple computer opponent.",
        hardPart:
            "Every move is validated against check: you can't move into check, and the computer finds a legal escape when it's in check. Vanilla JavaScript, no libraries.",
        tier: "earlier",
        screenshot: Chess,
        screenshotPosition: "center",
        githubLink: "https://github.com/gwhitfi/chess",
        hostedLink: "https://jwchess.netlify.app/",
        tech: [TECH.javascript, TECH.html, TECH.css],
        services: [],
    },
];
