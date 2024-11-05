import BtnRed from "../../BtnRed/BtnRed";


const TabSectionTab = ({ tabContent }) => {
    return (
       
        <div className="tab-section__tabs tab">

            <div className="tab__item tab__item_main">
                <div className="tab__content">
                    <h3 className="tab__title"> {tabContent.title} </h3>
                    <div className="tab__description">
                        {tabContent.descr.map((itemP, index) => <p key = {index}>{itemP}</p>)}
                        
                    </div>
                    <BtnRed link={tabContent.link} subClass={tabContent.linkClass} text={tabContent.linkText}/> 
                </div>
                <div className="tab__img">
                    <img src={`/src/components/TabSection/TabSectionTab/${tabContent.img}.jpg`} alt={tabContent.img} />
                </div>
            </div>
        </div>
    )
}

export default TabSectionTab;