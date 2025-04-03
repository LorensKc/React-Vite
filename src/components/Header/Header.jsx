import logo from '/vite.svg'

function Header() {
    const currentTime = new Date;

    return (
        <>
            <header>
            <img src={ logo } alt="React logo" />
            {/* <h3>Sony Corporation</h3> */}

            <span>Time now: {currentTime.toLocaleTimeString()}</span>
        </header>
        </>
    )
}

export default Header