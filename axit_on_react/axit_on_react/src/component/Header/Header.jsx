import { logo } from './logo.svg';
import { close } from './close.svg';


const Header = () => {
    return (
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <a href="#" class="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav class="menu">
                        <input type="checkbox" name="burger-menu" id="menu" />
                        <label for="menu">
                            <span class="menu__burger-img"></span>
                            <span class="menu__burger-img"></span>
                            <span class="menu__burger-img"></span>
                        </label>

                        <ul class="menu__list">
                            <div class="menu__burger-top">
                                <a href="#" class="logo-burger">
                                    <img src={logo} alt="logo" />
                                </a>
                                <label for="menu" class="menu__close">
                                    <img src={close} alt="close" />
                                </label>
                            </div>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Features</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">About</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Pricing</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Reviews</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;