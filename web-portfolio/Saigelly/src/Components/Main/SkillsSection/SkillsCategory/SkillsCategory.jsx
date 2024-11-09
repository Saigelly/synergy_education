import Card from '../Card/Card';
import './style.css';

const SkillsCategory = ({ name = null, cards = null }) => {
    return (
        <div class="skills__category">
            <h3 className="skills__category-title">{name}</h3>
            <div class="skills__grid">
                {cards?.map((item, index) => <Card type={item.type} icon={item.icon} title={item.title} value={item.value} key={index} />)}
            </div>
        </div>
    )
}

export default SkillsCategory;