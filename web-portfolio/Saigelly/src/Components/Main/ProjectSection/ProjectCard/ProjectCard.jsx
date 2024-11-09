import "./style.css";


const ProjectCard = ({ project, openPopup }) => {
    return (
        <div key={project.id} className="project-card" onClick={() => openPopup({ project })}>
            <div className="project-card__inner">
                <div className="project-card__front">
                    <img src={`./src/assets/projects/${project.image}`} alt={project.name} className="project__image" />
                </div>
                <div className="project-card__back">
                    <div className="project-card__back-overlay"></div>
                    <div className="project-card__back-content">
                        <h3 className="project-card__back-title">{project.name}</h3>
                        <p className="project-card__back-descr">{project.shortDescr}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;