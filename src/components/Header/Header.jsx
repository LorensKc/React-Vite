import { useState } from 'react';
import logo from '/vite.svg';
import { styled } from 'styled-components'
// import './Header.scss';

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #2b2a2a;
    box-sizing: border-box;
`

function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)

    return (
        <>
            <HeaderContainer>
                <img src={ logo } alt="React logo" />
                {/* <h3>Sony Corporation</h3> */}

                <span>Time now: {now.toLocaleTimeString()}</span>
            </HeaderContainer>
        </>
    )
}

export default Header