import './style.css'


const BtnRed = ({ subClass = null, link = null, text = '', forForm = null, type = null }) => {
    return (
        <button
            htmlFor={forForm}
            href={link}
            className={`${subClass} red-button`}
            type={type}
            >
            {text}</button>
       
    )
}

export default BtnRed;