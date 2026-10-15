import SetlistPlaylist from "../assets/SetlistPlaylist.png";
import WeatherSimple from "../assets/WeatherSimple.png";
import Chess from "../assets/Chess.png";
import JobScraper from "../assets/JobScraper.png";

export interface Project {
    title: string;
    description: string;
    screenshot: string;
    githubLink: string;
    hostedLink?: string;
    techIcons: string[];
    apisUsed: string[];
}

export const projects: Project[] = [
    {
        title: "Work Order Generator",
        description:
            "Built a multi-tenant SaaS platform that lets property managers generate, assign, and track contractor work orders. Designed a normalized PostgreSQL schema where every query is scoped to the user’s organization, keeping each company’s data separate",
        screenshot: "",
        githubLink: "https://www.workorder.dev",
        hostedLink: "https://www.workorder.dev",
        techIcons: ["devicon-go-plain colored"],
        apisUsed: ["REST Countries"],
    },
    {
        title: "Job Scraper",
        description:
            "A personal job tracker that checks company career pages, filters openings by location and fit, and uses AI to rate matches and estimate pay. It brings everything into one dashboard where you can search, star, hide, and track applications. Useful for smaller markets with less exposure to job boards.",
        screenshot: JobScraper,
        githubLink: "https://github.com/gwhitfi/job-scraper",
        techIcons: ["devicon-python-plain colored"],
        apisUsed: ["Claude Sonnet 5.5"],
    },
    {
        title: "WinTrellis",
        description:
            "A custom Windows tiling window manager, in the style of popular Linux managers. Automatically snaps windows into predetermined grids, and move windows and focus with hotkeys. Custom workspace views, and laucnher for favorite apps.",
        screenshot: "",
        githubLink: "https://github.com/gwhitfi/wintrellis",
        techIcons: ["devicon-rust-plain", "devicon-windows11-original"],
        apisUsed: ["Win32"],
    },
    {
        title: "CFB Manager",
        description:
            "College Football management simulator, inspired by the popular 'Football Manager' series by Sports Interactive. Custom C++ game engine, allows user to simulate games or play them out manually making playcalling and coaching decisions. View the game real time in browser.",
        screenshot: "",
        githubLink: "https://github.com/gwhitfi/cfb-sim",
        techIcons: ["devicon-cplusplus-plain colored", "devicon-typescript-plain colored", "devicon-css3-plain colored"],
        apisUsed: [],
    },
    {
        title: "File Sorter",
        description: "Clean folders by easily sorting into pre-determined destinations.",
        screenshot: WeatherSimple,
        githubLink: "https://github.com/gwhitfi/file-sorter",
        techIcons: ["devicon-cplusplus-plain colored", "devicon-windows11-original"],
        apisUsed: ["Win32"],
    },
    {
        title: "Setlist -> Playlist",
        description:
            "Search for your favorite musical artist and get a custom Spotify playlist created based on their recently played live setlists. Data provided by the Setlist.fm, MusicBrainz, Last.fm APIs, and artwork provided by the Fanart.tv API.",
        screenshot: SetlistPlaylist,
        githubLink: "https://github.com/gwhitfi/setlist-playlist",
        hostedLink: "",
        techIcons: [
            "devicon-typescript-plain colored",
            "devicon-react-original colored",
            "devicon-vitejs-plain colored",
            "devicon-tailwindcss-original colored",
        ],
        apisUsed: ["Spotify", "Last.fm", "Setlist.fm", "MusicBrainz", "Fanart.TV"],
    },
    {
        title: "Simple Weather",
        description:
            "A simple weather app that focuses on providing key information without filler. Implements the Open-Meteo and Google Geocoding APIs.",
        screenshot: WeatherSimple,
        githubLink: "https://github.com/gwhitfi/simple-weather",
        hostedLink: "https://weather-simplified.netlify.app/",
        techIcons: [
            "devicon-typescript-plain colored",
            "devicon-react-original colored",
            "devicon-vitejs-plain colored",
            "devicon-tailwindcss-original colored",
        ],
        apisUsed: ["Open-Meteo", "Google Geocoding"],
    },
    {
        title: "Browser Chess",
        description:
            "Browser-based Chess game with a computer opponent that moves automatically. Handles all normal chess functionality and win conditions.",
        screenshot: Chess,
        githubLink: "https://github.com/gwhitfi/chess",
        hostedLink: "https://jwchess.netlify.app/",
        techIcons: ["devicon-javascript-plain colored", "devicon-html5-plain colored", "devicon-css3-plain colored"],
        apisUsed: [],
    },
];
