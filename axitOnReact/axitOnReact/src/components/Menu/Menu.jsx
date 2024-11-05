import Logo from '../Logo/Logo';
import './style.css'
import  close  from './close.svg';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
    const menuItemtext = ['Features', 'About', 'Pricing', 'Reviews', 'Contact' ]
    
    return (
        <nav className="menu">
            <input type="checkbox" name="burger-menu" id="menu" />
            <label htmlFor="menu">
                <span className="menu__burger-img"></span>
                <span className="menu__burger-img"></span>
                <span className="menu__burger-img"></span>
            </label>
            <ul className="menu__list">
                <div className="menu__burger-top">
                    <Logo classLogo={"logo-burger"} />
                    <label htmlFor="menu" className="menu__close">
                        <img src={close} alt="close" />
                    </label>
                </div>
                {menuItemtext.map((item, index) => <MenuItem value = {item} key = {index} />)}
            </ul>
        </nav>
    )
}

export default Menu;