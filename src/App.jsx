import Header from './components/Header/Header'
import './App.css'
import { ways } from './data'
import { useState } from 'react';
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'

function App() {
const [count, setCount] = useState(0)const

  let content = 'Push the button'
  function handleClick(type) {
    console.log('click in App', type);
    content = type;
  }

  return (
    <>
      <Header />
      <div>
        <section>
          <h1>Here`s Jhonny</h1>
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h2>What is difference between ass</h2>
          <Button onClick={() => handleClick('way')} text='button 1'/>
          <Button onClick={() => handleClick('easy')} text='Click'/>
          <Button onClick={() => handleClick('program')}>Terminate</Button>

          <p>{content}</p>
        </section>
      </div>
    </>
  )
}

export default App
