
import Button from "../../Button/Button";
import CircleImg from "../../CircleImg/CircleImg";
import "./style.css";

const HeroSection = () => {

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__columns">
                    <div className="hero__content">
                        <h1 className="hero__title">Привет!<span> Я Дмитрий,</span> Frontend-разработчик </h1>
                        <p className="hero__descr">
                            С опытом в создании современных веб-приложений на React и других технологиях JavaScript. 
                        </p>
                        <p className="hero__buttons">
                            <Button color='orange' value='Посмотреть портфолио' />
                            <Button color='blue' value='Связаться со мной' />
                        </p>
                    </div>
                    <CircleImg subClass='hero__img' imgAlt='avatar' imgSrc='hero/avatar.png'/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;