import { useState } from 'react';
import logo from '/vite.svg';
import './Header.scss';

function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)

    return (
        <>
            <header>
            <img src={ logo } alt="React logo" />
            {/* <h3>Sony Corporation</h3> */}

            <span>Time now: {now.toLocaleTimeString()}</span>
        </header>
        </>
    )
}

export default Header