import BtnTransparent from '../BtnTransparent/BtnTransparent';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../TItle/Title';
import './style.css'


const Banner = () => {
   
    return (
        <section className="banner">
        <div className="container">
            <div className="banner__inner">
                <Title titlePlace='banner__title' value="STYLISH AXURE DESIGN"/>
                <Subtitle subtitlePlace='banner__subtitle' value="Use the sections you need, remove the ones you don't.  Create gorgeous prototypes faster than ever!"/>
                <BtnTransparent link='#' subClass='banner__btn' text='Download'/>
            </div>
        </div>
    </section>
    )
}

export default Banner;