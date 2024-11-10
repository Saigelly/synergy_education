import "./style.css";

const Input = ({ id, placeholder = '', type = 'text', name = "message" }) => {
    switch (type) {
        case 'text':
            return (<input id={id && null} type={type} className="input_default" placeholder={placeholder} />);
        case 'textarea':
            return (<textarea id={id && null} name={name} className="textarea_default" placeholder={placeholder}></textarea>);
    }

}

export default Input;