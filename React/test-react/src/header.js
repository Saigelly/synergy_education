import two_again from './images/two_again.png';

function Header() {
    return (

        <header className="header" >
            <div className="logo logo_place-header">Практическая</div>
            <h1 className="header__title">Научиться учиться</h1>
            <p className="header__subtittle">
                Какие современные и эффективные подходы к обучению вы
                можете использовать в своей жизни? <a href="#" className="header__link">Узнать →</a>
            </p>
            <img src={two_again} alt="two_again" className="header__illustration" />
            <div className="header__square-pic"></div>
        </header >
    )
}

export default Header;