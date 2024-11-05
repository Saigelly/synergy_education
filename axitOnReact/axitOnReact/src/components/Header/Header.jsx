
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './style.css'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo classLogo={"logo"} />
                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Header;