
const SocialListItem = ({value, link = '#'}) =>{

    const imgSrc = `/src/components/SocialList/SocialListItem/${value}.svg`;
    
    return(
        <li className="social-list__item">
        <a href={link} className="social-list__link">
            <img src={imgSrc} alt={value} />
        </a>
    </li>
    )
}

export default SocialListItem;