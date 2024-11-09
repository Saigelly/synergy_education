import './style.css';

const Card = ({ type = 'progress-bar', icon = '', title = 'Название Скилла', value = '42' }) => {

    return (
        <div className="skill__card card">
            <img src={`./src/assets/${icon}`} alt={icon} className="card__icon" />
            <h4 className="card__title">{title}</h4>
            {type === 'progress-bar'
                ? <>
                    <div className="card__progress-bar" style={{ width: value }}></div>
                    <span className="card__progress-text" >{value}</span>
                </>
                : <>
                    <p className="card__text">{value}</p>
                </>
            }
        </div>
    )
}

export default Card;