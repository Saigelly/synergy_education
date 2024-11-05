import './style.css'


const AdvantagesItem = ({itemContent}) => {
    const imgSrc = `/src/components/Advantages/AdvantagesItem/${itemContent.img}.svg`;
   
    return (
        <div className="advantages__item">
                            <div className="advantages__icon">
                                <img src={imgSrc} alt={itemContent.img} />
                            </div>
                            <h3 className="advantages__item-title">{itemContent.title}</h3>
                            <p className="advantages__description">{itemContent.descr}</p>
                        </div>
    )
}

export default AdvantagesItem;