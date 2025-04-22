import Button from "./Button/Button"
import { useState } from "react"

function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false, 
        reason: 'help',
    })
    
    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    return (
        <section>
            <h3>Feedback to ass</h3>

            <form action="">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} 
                style={{
                    border: form.hasError ? '1px solid red' : null,
                }}/>

                <label htmlFor="reason:">Your feedback</label>
                <select 
                    id="reason" 
                    className="control" 
                    value={form.reason} 
                    onChange={(e) => setForm((prev) => ({...prev, reason: e.target.value}))}
                >
                    <option value="error">Error</option>
                    <option value="help">Need help</option>
                    <option value="suggest">Suggest</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Send message</Button>
            </form> 

            <pre>
                Name: {form.name} <br />
                Reason: {form.reason}
            </pre>
        </section>
    )
}

export default FeedbackSection