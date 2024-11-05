import BtnRed from '../BtnRed/BtnRed';
import BtnTransparent from '../BtnTransparent/BtnTransparent';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import './style.css';


const TopSection = () => {
    const inputs = [
        {type : 'text', name : 'username', tabIndex : '2', placeholder : 'Name', subClass: 'form__input'},
        {type : 'email', name : 'user-email', tabIndex : '3', placeholder : 'Email', subClass: 'form__input'},
        {type : 'password', name : 'user-pass', tabIndex : '4', placeholder : 'Password', subClass: 'form__input'},
    ]
    return (
        <section className="top">
            <div className="container">
                <div className="top__inner">
                    <div className="top__content">
                        <Logo classLogo = "top__logo" />
                        <h1 className="top__title">MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h1>
                        <p className="top__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <BtnTransparent subClass={'top__button'} text={'Download'}/>
                    </div>
                    <div className="top__form form">
                        <p className="form__title">Try Your <span className="span-red">FREE</span> Trial Today </p>
                        <form action="#" id="form-autho" className="form__inner">
                            {inputs.map((item, index) => <Input props = {item} key={index}/>)}
                        </form>
                        <BtnRed forForm="form-autho" subClass='form__button' text='Get Started' type="submit" tabIndex="5"/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TopSection;