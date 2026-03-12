type ProjectCardProps = {
    title: string
    image: string,
    description: string
    link: string
}

function ProjectCard({title, image, description, link }: ProjectCardProps) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{title}</h5>
                    <img src={image} alt="project-image" />
                    <p className="card-text text-muted text-center">{description}</p>
                    <a href={link} className="btn btn-outline-primary mt-auto">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;