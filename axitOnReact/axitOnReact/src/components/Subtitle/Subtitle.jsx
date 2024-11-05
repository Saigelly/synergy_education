import './style.css'


const Subtitle = ({subtitlePlace='', value}) => {
   
    return (
        <p className={`${subtitlePlace} subtitle`}>{value}</p>
    )
}

export default Subtitle;