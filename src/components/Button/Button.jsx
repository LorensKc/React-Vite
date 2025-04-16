import { Children } from 'react';
import './Button.scss';

function Button({text, children, onClick, isActive}) {
    // let classes = 'button';
    // if(isActive) classes += ' active';


    return(
        <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
            {text}
            {children}
        </button>
    )
}

export default Button