import './style.css';

const MenuItem = ({item}) => {
    return (
        <li className="menu__item">
            <a href="#" className="menu__link">{item}</a>
        </li>
    )
}

export default MenuItem;