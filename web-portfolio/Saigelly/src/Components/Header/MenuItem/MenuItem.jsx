import { Link } from 'react-router-dom';
import './style.css';

const MenuItem = ({item}) => {
    return (
        <li className="menu__item">
            <Link to={item.path} className="menu__link">{item.value}</Link>
        </li>
    )
}

export default MenuItem;