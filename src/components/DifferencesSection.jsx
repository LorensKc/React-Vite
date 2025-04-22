import { useState } from 'react';
import { differences } from '../data'
import Button from './Button/Button'

function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
            <h2>What is difference between ass</h2>
            <Button isActive={contentType === 'way'} onClick={() => handleClick('way')} text='button 1'/>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')} text='Click'/>
            <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Terminate</Button>

            { !contentType && <div>Push the button</div> }
            { contentType && <p>{differences[contentType]}</p> }
        
        </section>
    );
}

export default DifferencesSection