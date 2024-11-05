import './style.css'


const BtnTransparent = ({ subClass='', link = '#', text='' }) => {
    return (
        <a href={link} className={`btn-transparent ${subClass} `} >{text}</a>

    )
}

export default BtnTransparent;