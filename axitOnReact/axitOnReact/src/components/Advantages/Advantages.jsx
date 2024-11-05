
import Subtitle from '../Subtitle/Subtitle';
import Title from '../TItle/Title';
import AdvantagesItem from './AdvantagesItem/AdvantagesItem';

import './style.css'


const Advantages = () => {
    const items = [
        {img: 'advantages-1', title: 'Thoughtful Design', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida  dolor sit amet lacus accumsan et viverra.'},
        {img: 'advantages-2', title: 'Thoughtful Design', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida  dolor sit amet lacus accumsan et viverra.'},
        {img: 'advantages-3', title: 'Thoughtful Design', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida  dolor sit amet lacus accumsan et viverra.'},
    ];
    return (
        <section className="advantages">
            <div className="container">
                <div className="advantages__inner">
                    <Title titlePlace='advantages__title' value="WHY THIS IS AWESOME" />
                    <Subtitle
                        subtitlePlace='advantages__subtitle'
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                
                    <div className="advantages__content">
                        {items.map((item, index) => <AdvantagesItem itemContent = {item} key = {index}/>)}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;