import './style.css'
import  logoImg  from './logo.svg';

const Logo = ({classLogo}) => {

    return (
        <a href="#" className={classLogo}>
            <img src={logoImg} alt="logo" />
        </a>
    )
}

export default Logo;