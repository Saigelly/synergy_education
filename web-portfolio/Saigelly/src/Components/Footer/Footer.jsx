import ListItem from "./ListItem/ListItem";
import "./style.css";

const Footer = () => {
    const items = [
        {
            imgSrc: 'telegram.svg',
            href: 'tg',
            altImage: 'telegram'
        },
        {
            imgSrc: 'email.png',
            href: 'email',
            altImage: 'email'
        },
        {
            imgSrc: 'vk.svg',
            href: 'vk',
            altImage: 'vk'
        },
        {
            imgSrc: 'github.svg',
            href: 'github',
            altImage: 'github'
        },
        {
            imgSrc: 'whatsup.svg',
            href: 'whatsup',
            altImage: 'whatsup'
        },
        {
            imgSrc: 'phone.png',
            href: 'phone',
            altImage: 'phone'
        },
    ]
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <ul class="footer__list social-list">
                        {items.map(social => <ListItem href={social.href} imgSrc={social.imgSrc} altImage={social.altImage} key={social.altImage}/> )}
                    </ul>
                    <h4 class="footer__copy">© Saigelly</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;