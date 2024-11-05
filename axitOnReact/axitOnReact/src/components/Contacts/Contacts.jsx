import BtnRed from '../BtnRed/BtnRed';
import Input from '../Input/Input';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../TItle/Title';
import './style.css'
//Кнопке стили поменять можно чтобы враппер убрать

const Contacts = () => {
    const inputs = [
        { type: 'text', name: 'username', tabIndex: '8', placeholder: 'Name', subClass: 'contact__input' },
        { type: 'email', name: 'user-email', tabIndex: '9', placeholder: 'Email', subClass: 'contact__input' },
        { type: 'password', name: 'user-pass', tabIndex: '10', placeholder: 'Password', subClass: 'contact__input' },
    ]
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__inner">
                    <Title titlePlace='contact__title' value='contact us' />
                    <Subtitle subtitlePlace='contact__subtitle' value='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <form action="#" id="contact-form" className="contact__form">
                        <div className="contact__column">
                            {inputs.map((item, index) => <Input props={item} key={index} />)}
                        </div>
                        <textarea name="message" rows="6" id="mes" className="contact__textarea input" placeholder="Message"></textarea>
                    </form>
                    <div className="contact__btn-wrapper">
                        <BtnRed forForm="contact-form" subClass='contant__btn' text='Send Message' type="submit" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;