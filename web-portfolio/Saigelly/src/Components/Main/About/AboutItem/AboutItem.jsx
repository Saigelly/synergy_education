
import CircleImg from "../../../CircleImg/CircleImg";
import "./style.css";

const AboutItem = ({ subClass = '', subClassImg = '', item }) => {
    
    return (
        <div className={`item ${subClass} ${item.isReverse ? '_reverse' : ''}`}>
            <div className="item__descr">
                <h3 className="item__title">{item.title}</h3>
                <p className="item__text">{item.text}</p>
            </div>
            <CircleImg
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                subClass={subClassImg} />
        </div>
    )
}

export default AboutItem;