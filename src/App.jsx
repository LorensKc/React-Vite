import Header from './components/Header/Header'
import './App.css'
import { ways, differences } from './data'
import { useState } from 'react';
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'

function App() {
  const [contentType, setContentType] = useState(null);
    console.log('App render')

  function handleClick(type) {
    // console.log(contentType)
    setContentType(type)
  }

  // let tabContent = null;

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>;
  // } else {
  //   tabContent = <div>Push the button</div>;
  // }

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
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')} text='button 1'/>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')} text='Click'/>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Terminate</Button>

          { !contentType && <div>Push the button</div> }
          { contentType && <p>{differences[contentType]}</p> }

          {/* {tabContent} */}
          
        </section>
      </div>
    </>
  )
}

export default App
