import ProjectCard from "./ProjectCard";
import chessProjectImage from "../assets/Chess1.png"
import chessProjectImage2 from "../assets/Chess2.png"

const projects = [
    {
    title: "Project One",
    description: "A small React app with Bootstrap styling and reusable components.",
    image: chessProjectImage,
    link: "#",
  },
  {
    title: "Project Two",
    description: "A responsive landing page using Bootstrap grid and utility classes.",
    image: chessProjectImage2,
    link: "#",
  },
  {
    title: "Project Three",
    description: "A portfolio section showing cards generated from an array of data.",
    image: "../assets/Chess1.png",
    link: "#",
  }
]


function ProjectSection() {
    return (
        <section id="projects" className="py-5 bg-dark text-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Projects</h2>
                    <p className="">Examples of recent work.</p>
                </div>

                <div className="row">
                    {projects.map((projects) => (
                        <ProjectCard key={projects.title} title={projects.title} image={ projects.image } description={projects.description} link={projects.link} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection