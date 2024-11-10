import "./style.css";

const ListItem = ({ href='#', imgSrc, altImage='icon' }) => {

    return (
        <li class="social-list__item">
            <a href={href} class="social-list__link">
                <img src={`/src/assets/sociallist/${imgSrc}`} alt={altImage} />
            </a>
        </li>
    )
}

export default ListItem;