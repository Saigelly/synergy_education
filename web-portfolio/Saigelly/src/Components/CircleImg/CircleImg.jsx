
import "./style.css";

const CircleImg = ({ imgSrc='', imgAlt='img', subClass='' }) => {
    const image = `/src/assets/${imgSrc}`
    return (
        <div className={`circle-img ${subClass}`}>
            <img src={image} alt={imgAlt} />
        </div>
    )
}

export default CircleImg;