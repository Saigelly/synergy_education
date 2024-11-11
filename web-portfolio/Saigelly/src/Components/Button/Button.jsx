
import "./style.css";

const Button = ({color = 'blue', value = null, link = null, type='button', onClickFn = null, subClass = ''}) => {
   
    return (
        type === 'button'
        ? <button
         className={`btn btn_${color} ${subClass}`}
         onClick={() => {onClickFn()}}
         href={link}
          >{value}</button>
        : <a href={link} target="_blank" className={`btn btn_${color} ${subClass}`}>{value}</a>
    )
}

export default Button;