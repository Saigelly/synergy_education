import { useEffect, useState } from 'react';
import TabSectionTab from './TabSectionTab/TabSectionTab';
import './style.css';
import switchTabInTabSection from '../../helpers/switchTabInTabSection';

const TabSection = () => {
    const arrTabItem = [
        { title: 'Tabs with soft transitioning effect.', descr: [' Tab 1 Lorem', 'Lorem ipsum dolor'], link: '#', linkClass: 'tab__button', linkText: 'Download', img: 'liberty' },
        { title: 'Tabs with soft transitioning effect.', descr: [' Tab 2 Lorem', 'Lorem ipsum dolor', 'lorem5'], link: '#', linkClass: 'tab__button', linkText: 'Download', img: 'paris' },
        { title: 'Tabs with soft transitioning effect.', descr: [' Tab 3 Lorem', 'Lorem ipsum dolor'], link: '#', linkClass: 'tab__button', linkText: 'Download', img: 'Pisa' }
    ]
    const [tabContent, setTabContent] = useState(arrTabItem[0])


    return (
        <section className="tab-section">
            <div className="container">
                <div className="tab-section__inner">
                    <div className="tab-section__navigation">
                        <div className="tab-section__label _active"
                            onClick={(e) => switchTabInTabSection(e, setTabContent, arrTabItem[0])}
                        >Tab1</div>
                        <div className="tab-section__label"
                            onClick={(e) => switchTabInTabSection(e, setTabContent, arrTabItem[1])}
                        >Tab2</div>
                        <div className="tab-section__label"
                            onClick={(e) => switchTabInTabSection(e, setTabContent, arrTabItem[2])}
                        >Tab3</div>
                    </div>

                    <TabSectionTab tabContent={tabContent} />
                </div>
            </div>
        </section>
    )
}


export default TabSection;