import Button from "./Button/Button"
import { useState } from "react"

function FeedbackSection() {
    const [name, setName ] = useState('');
    const [hasError, setHasError ] = useState(false);
    const [reason, setReason ] = useState('help');

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0);
    }

    function toggleError() {
        setHasError((prev) => !prev)
        // setHasError(!hasError); // false
        // setHasError(!hasError); //true
    }

    return (
        <section>
            <h3>Feedback to ass</h3>

            <Button onClick={toggleError}>Toggle Error</Button>

            <form action="">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" className="control" value={name} onChange={handleNameChange} 
                style={{
                    border: hasError ? '1px solid red' : null,
                }}/>

                <label htmlFor="reason:">Your feedback</label>
                <select id="reason" className="control" value={reason} onChange={(e) => setReason(e.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Need help</option>
                    <option value="suggest">Suggest</option>
                </select>

                <Button disabled={hasError} isActive={!hasError}>Send message</Button>
            </form> 

            <pre>
                Name: {name} <br />
                Reason: {reason}
            </pre>
        </section>
    )
}

export default FeedbackSection