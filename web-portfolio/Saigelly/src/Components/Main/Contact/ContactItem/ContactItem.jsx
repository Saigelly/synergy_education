import "./style.css";

const ContactItem = ({ data }) => {

    return (
        <a href={data.href || "#"} className="contact-item">
            <div className="contact-item__icon">
                <img src={`./src/assets/${data.iconSrc}`} alt={data.id || 'image'} />
            </div>
            <p className="contact-item__descr">{data.descr || "Описание"}</p>
        </a>
    )
}

export default ContactItem;