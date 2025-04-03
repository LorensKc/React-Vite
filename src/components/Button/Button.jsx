import { Children } from 'react';
import './Button.scss';

function Button({text, children, onClick}) {

    return(
        <button className="button" onClick={onClick}>
            {text}
            {children}
        </button>
    )
}

export default Button