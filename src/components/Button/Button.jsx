import { Children } from 'react';
import './Button.scss';

function Button({text, children, isActive, ...props}) {
    return(
        <button 
            {...props}
            className={isActive ? 'button active' : 'button'} 
        >
            {text}
            {children}
        </button>
    )
}

export default Button