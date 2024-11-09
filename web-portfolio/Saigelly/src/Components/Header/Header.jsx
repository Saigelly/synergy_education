import MenuItem from "./MenuItem/MenuItem";
import "./style.css";

const Header = () => {
    const menuItems = ["Портфолио", "Навыки", "Контакты"]
    return (
        <header className="header">
            <div className="container">
               
                    <nav className="menu">
                        <ul className="menu__list">
                            {menuItems.map((item, index) => <MenuItem item={item} key={index} />)}
                        </ul>
                    </nav>
               
            </div>
        </header>
    )
}

export default Header;