const switchTabInTabSection = (e, setTabContent, arrTabItem) => {
    const tabLabelActive = document.querySelector('.tab-section__label._active');
    if (tabLabelActive !== e.target) {
        tabLabelActive.classList.remove('_active');
        e.target.classList.add('_active');
        setTabContent(arrTabItem)
    }
}

export default switchTabInTabSection;