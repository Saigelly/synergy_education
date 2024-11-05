import './style.css'

// type = 'text', name = '', tabIndex = '', placeholder = '', subClass = ''
const Input = ({ props }) => {
    
    return (
        <input
            type={props.type}
            name={props.name}
            tabIndex={props.tabIndex}
            placeholder={props.placeholder}
            className={`${props.subClass} input`} />

    )
}

export default Input;