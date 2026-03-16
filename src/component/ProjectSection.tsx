import ProjectCard from "./ProjectCard";
import chessProjectImage from "../assets/Chess1.png"
import cardTableProject from "../assets/cardtable.png"
import { technologies } from "../data/technologies"

const projects = [
    {
    title: "Chess ",
    description: "Simple chess game that allows the user to play against a computer opponent ",
    image: chessProjectImage,
    projectLink: "https://jwchess.netlify.app/",
    githubLink: "https://github.com/gwhitfi/chess",
    tech: [
            technologies.javascript, technologies.html, technologies.css
          ]
  },
  {
    title: "Console Card Game",
    description: "Console based card game, offering different card game options.",
    image: cardTableProject,
    projectLink: "https://github.com/gwhitfi/CardGame",
    githubLink: "https://github.com/gwhitfi/CardGame",
    tech: [technologies.csharp, technologies.dotnet]
  }
]


function ProjectSection() {
    return (
        <section id="projects" className="py-5 bg-dark text-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Projects</h2>
                </div>

                <div className="row justify-content-center">
                    {projects.map((projects) => (
                        <ProjectCard key={projects.title} title={projects.title} image={projects.image} description={projects.description} projectLink={projects.projectLink} githubLink={projects.githubLink} tech={projects.tech} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection