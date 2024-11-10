import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";
import ContactItem from "./ContactItem/ContactItem";
import "./style.css";

const Contact = ({ }) => {

    const methodsOfCommun = [
        {
            id: "telegram",
            href: "hrefTg",
            iconSrc: "contact/telegram.svg",
            descr: "Написать в Telegram"
        },
        {
            id: "phone",
            href: "hrefPhone",
            iconSrc: "contact/phone.png",
            descr: "+7(921)-214-75-99"
        },
        {
            id: "mail",
            href: "hrefmail",
            iconSrc: "contact/email.png",
            descr: "Saigellyy@yandex.ru"
        },
    ]


    return (
        <div className="contact">
            <div className="container">
                <Title subClass="contact__title" value='Связаться' />

                <div className="contact__inner">
                    <div className="contact__row">
                        {methodsOfCommun.map((method, index) => <ContactItem data={method} key={index} />)}
                    </div>
                    <form className="contact__form form">
                        <p className="form__field-name">Имя</p>
                        <Input
                            placeholder={'Введите свое Имя'}
                        />
                        <p className="form__field-name">Email</p>
                        <Input
                            placeholder={'Введите свой Email'}
                        />
                        <p className="form__field-name">Сообщение</p>
                        <Input type="textarea" placeholder="Введите сообщение" />
                        {/* <Input type = {"checkbox"} /> */}
                        <Button color="orange" value={"Отправить"} subClass="form__btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;