
import AboutItem from "./AboutItem/AboutItem";
import "./style.css";


const About = () => {
    const aboutItems = [
        { isReverse: false, imgSrc: 'about/about.png', imgAlt: 'me', title: 'frontend-разработчик из Санкт-Петербурга', text: 'C опытом в создании интерактивных приложений на чистом JavaScript, CSS и HTML. На данный момент работаю преимущественно с React и уделяю особое внимание созданию красивого, понятного кода. Для меня важен минимализм и лёгкость интерфейса, но мне также нравится добавлять анимации, которые делают взаимодействие более живым и приятным для пользователя.' },
        { isReverse: true, imgSrc: 'about/filosofy.png', imgAlt: 'filosofy', title: 'Моя философия:', text: '"Код должен быть красивым". Верю, что каждая строчка может сочетать в себе элегантность и эффективность, а интерфейсы должны быть простыми и интуитивно понятными.' },
        { isReverse: false, imgSrc: 'about/work.png', imgAlt: 'work', title: 'В работе:', text: 'Гибок, легко подстраиваюсь под изменения и люблю командную работу. Мне нравится участвовать в проекте как часть сплочённой команды и руководить небольшими подразделениями, чтобы каждый участник мог раскрыть свой потенциал.' },
        { isReverse: true, imgSrc: 'about/personal.png', imgAlt: 'personal', title: 'Немного о личном:', text: 'Cчастливый муж и отец. Моя семья — это любимая жена Маша, дочка Полина и наш пёс Джессика. В свободное время занимаюсь музыкой и наслаждаюсь ритмом города.' },


    ]
    return (
        <section className="about">
            <div className="container">
                <div className="about__inner">
                    {aboutItems.map((item, index) =>
                        <AboutItem
                            item={item}
                            subClass='about__item'
                            subClassImg='about__img'
                            key={index} />)}
                </div>
            </div>
        </section>
    )
}

export default About;