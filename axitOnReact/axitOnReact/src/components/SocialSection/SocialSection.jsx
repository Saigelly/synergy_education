import SocialList from '../SocialList/SocialList';
import './style.css'


const SocialSection = () => {
    return (
        <section className="social">
        <div className="container">
            <div className="social__inner">
                <div className="social__content">
                    <h2 className="social__title">Social Media</h2>
                    <p className="social__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean euismod bibendum laoreet.</p>
                </div>
              <SocialList classSocial = 'social__list' />
            </div>
        </div>
    </section>

    )
}

export default SocialSection;