import SocialList from '../SocialList/SocialList';
import './style.css'


const Footer = () => {
   
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <SocialList classSocial='footer__list' />
                <h5 className="footer__copy">© 2015 Axure Themes</h5>
            </div>
        </div>
       </footer>
    )
}

export default Footer;