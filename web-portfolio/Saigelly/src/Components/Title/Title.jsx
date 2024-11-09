import "./style.css";

const Title = ({ subClass = '', value = null }) => {

    return (
        <h2 className={`${subClass} title`}>{value}</h2>
    )
}

export default Title;