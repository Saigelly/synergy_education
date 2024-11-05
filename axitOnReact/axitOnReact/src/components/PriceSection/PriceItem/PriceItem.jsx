import './style.css'


const PriceItem = ({ itemContent }) => {
    return (
        <div className="price__item item-price">
            <h3 className="item-price__rate">{itemContent.rate}</h3>
            <p className="item-price__cost">{itemContent.cost}</p>
            <p className="item-price__desc">{itemContent.descr}</p>
            <ul className="item-price__service-list">
                {itemContent.services.map((serv, index) => <li className="item-price__service" key={index}>{serv}</li>)}
            </ul>
        </div>
    )
}

export default PriceItem;