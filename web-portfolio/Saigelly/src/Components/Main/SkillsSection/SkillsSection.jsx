
import Title from "../../Title/Title";
import SkillsCategory from "./SkillsCategory/SkillsCategory";
import "./style.css";

const SkillsSection = () => {

    const categories = [
        {
            name: "Frontend", cards: [
                { type: "progress-bar", icon: "react.png", title: "React", value: "20%" },
                { type: "progress-bar", icon: "js.png", title: "JavaScript", value: "60%" },
                { type: "progress-bar", icon: "html-5.png", title: "HTML", value: "80%" },
                { type: "progress-bar", icon: "css-3.png", title: "CSS", value: "70%" },
            ]
        },
        {
            name: "Инструменты", cards: [
                { type: "progress-bar", icon: "github.png", title: "Git", value: "60%" },
                { type: "progress-bar", icon: "axios.png", title: "Axios", value: "30%" },
                { type: "progress-bar", icon: "npm.png", title: "NPM", value: "65%" },
            ]
        },
        {
            name: "Soft Skills", type: "text", cards: [
                { type: "text", icon: "team-work.png", title: "Командная работа", value: "Умение эффективно работать и общаться в коллективе." },
                { type: "text", icon: "flexibility.png", title: "Гибкость", value: "Быстро адаптируюсь к изменениям и нахожу нестандартные решения." },
                { type: "text", icon: "attention.png", title: "Внимание к деталям", value: "Сосредоточен на качестве кода и точности в реализации деталей." },
            ]
        },
    ]
    return (
        <div className="skills">
            <div className="container">
                <Title subClass="skills__title" value="Мои навыки"/>
                {categories.map((item, index) => <SkillsCategory name={item.name} cards={item.cards} key={index} />)}
            </div>
        </div>
    )
}

export default SkillsSection;