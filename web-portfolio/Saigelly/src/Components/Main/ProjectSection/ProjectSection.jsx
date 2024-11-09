
import { useState, useTransition } from "react";
import Title from "../../Title/Title";
import PopUp from "./PopUp/PopUp";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./style.css";
import Button from "../../Button/Button";

const ProjectSection = () => {
    console.log('---render ProjectSection')

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [numOfProjects, setNumOfProjects] = useState(4);
    const projects = [
        {
            id: 'AppCrypto',
            name: 'AppCrypto',
            shortDescr: 'Приложение для просмотра актуального курса криптовалют.',
            description: 'Приложение для просмотра актуального курса криптовалют. Встроена функция поиска по ключевым словам. Приложение адаптировано для мобильных телефонов',
            technologies: 'React, CSS, Axios, Git,',
            skills: 'React, управление состоянием, стилизация, работа с API',
            githubLink: 'https://github.com/Saigelly/crypto',
            demoLink: 'https://crypto-three-weld.vercel.app/',
            image: 'crypto.jpg',
        },
        {
            id: 'todolist',
            name: 'ToDo List',
            shortDescr: 'Приложение для управления задачами',
            description: 'Приложение для управления задачами с функцией добавления, удаления и редактирования задач.',
            technologies: 'React, CSS',
            skills: 'React, управление состоянием, стилизация',
            githubLink: 'https://github.com/username/todolist',
            image: 'todolist.jpg',
        },
        {
            id: 'axit',
            name: 'Сайт AXIT',
            shortDescr: 'Интерактивный веб-сайт компании AXIT',
            description: 'Frontent для веб-сайта изначально написанный на чистом HTML+CSS включаю такие функции как: бургерное меню, переключание табиков, слайдер. Позже переписанный на React так же перписав логику интерактивных элементов с использованием React.',
            technologies: 'React, CSS, HTML, Git',
            skills: 'React, управление состоянием, стилизация, аддаптив',
            githubLink: 'https://github.com/Saigelly/synergy_education/tree/main/axitOnReact',
            image: 'axit.png',
        },

        {
            id: 'movieApp',
            name: 'movie App',
            shortDescr: 'Онлайн кинотеатр',
            description: 'Приложение позволяет увидеть топ новинок кинопоиска. Так же реализован поиск фильма по ключевому слову, пагниация страницы. Добавлена страница с последнями новостями из мира кино.',
            technologies: 'HTML, CSS, Js, Git',
            skills: 'Работа с API, ассинхронное програмирование, стилизация',
            githubLink: 'https://github.com/Saigelly/movieApp',
            image: 'movieApp.jpg',
        },
        {
            id: 'calculator',
            name: 'Калькулятор',
            shortDescr: 'Простое приложение для расчетов с интуитивным интерфейсом.',
            description: 'Простое приложение для расчетов с интуитивным интерфейсом.',
            technologies: 'JavaScript, HTML, CSS',
            skills: 'Верстка, базовая логика JavaScript',
            githubLink: 'https://github.com/Saigelly/synergy_education/tree/main/02_calc',
            image: 'calc.jpg',
        },
        {
            id: 'zametki',
            name: 'Заметки',
            shortDescr: 'Приложения для создания заметок',
            description: 'адаптивное приложение работающее на телефоне и использующая localStorage для хранения заметок в памяти браузера. Можно добавлять, редактировать, удлаять, выбирать заметки...',
            technologies: 'HTML, CSS, Js, Git',
            skills: 'Работа с API, ассинхронное програмирование, стилизация',
            githubLink: 'https://github.com/Saigelly/movieApp',
            image: 'empty.jpg',
        },

    ];

    const openPopup = (project) => {
        setCurrentProject(project);
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    const addProjects = () => {
        setNumOfProjects(prev => prev += 2);
    }

    const defaultProject = () => {
        setNumOfProjects(4);
    }
    return (
        <div className="projects">
            <div className="container">
                <Title subClass="projects__title" value="Мои проекты" />
                <div className="projects__grid">
                    {projects.slice(0, numOfProjects).map((project) => <ProjectCard project={project} openPopup={openPopup} key={project.id} />)}
                </div>
                {numOfProjects < projects.length
                    ? <Button
                        color="transparent"
                        type="button"
                        value="Больше проектов"
                        onClickFn={addProjects}
                        subClass='project__btn_add' />
                    : <Button
                        color="transparent"
                        type="button"
                        value="Скрыть"
                        onClickFn={defaultProject}
                        subClass='project__btn_add' />}
                <PopUp project={currentProject} isOpen={isPopupOpen} onClose={closePopup} />
            </div>
        </div>
    )
}

export default ProjectSection;