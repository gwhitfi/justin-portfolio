import "../index.css"

type ProjectCardProps = {
    title: string
    image: string,
    description: string
    projectLink: string
    githubLink: string
}

function ProjectCard({title, image, description, projectLink, githubLink }: ProjectCardProps) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{title}</h5>
                    <img src={image} alt="project-image" className="card-img-top project-image" onClick={() => window.open(projectLink, "_blank")}/>
                    <p className="card-text text-muted text-center">{description}</p>
                    <a href={projectLink} className="btn btn-outline-primary mt-auto">
                        View Project
                    </a>
                    <a href={githubLink} className="btn btn-outline-primary mt-auto">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;