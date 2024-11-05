import SocialListItem from './SocialListItem/SocialListItem'
import './style.css'


const SocialList = ({ classSocial = '' }) => {
    const socialListItem = ['facebook', 'x', 'linkedin', 'pinterest', 'instagram', 'github', 'rss',]
    return (
        <ul className={`${classSocial} social-list`}>
            {socialListItem.map((item, index) => <SocialListItem value = {item} key = {index}/>)}
        </ul>
    )
}

export default SocialList;