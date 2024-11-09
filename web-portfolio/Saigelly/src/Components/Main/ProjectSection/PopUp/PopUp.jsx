import { useEffect } from "react";
import "./style.css";
import Button from "../../../Button/Button";

const PopUp = ({ project, isOpen, onClose }) => {
    // console.log('Проект', project.project)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`project-popup ${isOpen ? "show" : ''}`} onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>×</span>
 
                    <img className="popup__image" src={`./src/assets/projects/${project.project.image}`} alt={project.project.name} />

                <h3 className="project__title">{project.project.name}</h3>
                <p className="project__descr">{project.project.description}</p>
                <ul className="project__list">
                    <li className="project__list-item"><span>Технологии: </span> {project.project.technologies}</li>
                    <li className="project__list-item"><span>Навыки: </span> {project.project.skills}</li>
                </ul>
                <div className="button-group">
                    {project.project.demoLink
                        ? <><Button type = 'a' color="orange" value='Посмотреть демо' link={project.project.demoLink} /></>
                        : null}
                    {project.project.githubLink
                        ? <><Button type = 'a' color="transparent" value='Исходный код' link={project.project.githubLink} /></>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default PopUp;