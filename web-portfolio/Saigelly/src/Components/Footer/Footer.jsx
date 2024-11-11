import ListItem from "./ListItem/ListItem";
import "./style.css";

const Footer = () => {
    const items = [
        {
            imgSrc: 'telegram.svg',
            href: 'https://t.me/Saigelly',
            altImage: 'telegram',
            target: "_blank"
        },
        {
            imgSrc: 'email.png',
            href: 'mailto:Saigellyy@yandex.ru',
            altImage: 'email',
            target: "_self"

        },
        {
            imgSrc: 'vk.svg',
            href: 'https://vk.com/rinars',
            altImage: 'vk',
            target: "_blank"
        },
        {
            imgSrc: 'github.svg',
            href: 'https://github.com/Saigelly',
            altImage: 'github',
            target: "_blank"
        },
        {
            imgSrc: 'whatsup.svg',
            href: 'https://wa.me/79212147599',
            altImage: 'whatsup',
            target: "_blank"
        },
        {
            imgSrc: 'phone.png',
            href: 'tel:+79212147599',
            altImage: 'phone',
            target: "_self"
        },
    ]
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <ul class="footer__list social-list">
                        {items.map(social => <ListItem href={social.href} imgSrc={social.imgSrc} altImage={social.altImage} key={social.altImage} target={social.target}/> )}
                    </ul>
                    <h4 class="footer__copy">© Saigelly</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;