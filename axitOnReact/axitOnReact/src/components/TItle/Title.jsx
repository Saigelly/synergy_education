import './style.css'


const Title = ({titlePlace='', value}) => {
   
    return (
        <h2 className={`${titlePlace} title`}>{value}</h2>
    )
}

export default Title;