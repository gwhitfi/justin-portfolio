import SetlistPlaylist from "../assets/SetlistPlaylist.png";
import WeatherSimple from "../assets/WeatherSimple.png";
import Chess from "../assets/Chess.png";

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
        techIcons: [
            "devicon-javascript-plain colored",
            "devicon-html5-plain colored",
            "devicon-css3-plain colored",
        ],
        apisUsed: [],
    },
];
