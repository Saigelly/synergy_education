import Subtitle from '../Subtitle/Subtitle';
import Title from '../TItle/Title';
import PriceItem from './PriceItem/PriceItem';
import './style.css'

const PriceSection = () => {
    const items = [
        {rate: 'Basic', cost: '$10', descr: 'Free for life', services: ['1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space']},
        {rate: 'Optima', cost: '$20', descr: 'Free for life', services: ['1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space']},
        {rate: 'Pro', cost: '$30', descr: 'Free for life', services: ['1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space', '1 Gb Of Space']}];
   
    return (
        <section className="price">
        <div className="container">
            <div className="price__inner">
                <Title titlePlace = 'price__title' value = 'pricing options'/>
                <Subtitle subtitlePlace='price__subtitle' value='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                <div className="price__content">
                    {items.map((item, index) => <PriceItem itemContent = {item} key = {index}/>)}
                </div>
            </div>
            
        </div>
    </section>
    )
}

export default PriceSection;