import Button from "./Button/Button"
import { useState, useRef } from "react"

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

    function StateVsRef() {
        const input = useRef()
        const [show, setShow] = useState(false)

        function handleKeyDown(event) {
            if (event.key === 'Enter') {
                setShow(true)
            }
        }

        return (
            <div>
                <h3>State vs Ref {show && input.current.value}</h3>
                <input
                    type="text" 
                    ref={input}
                    className="control"
                    onKeyDown={handleKeyDown}
                />
            </div>
        )
    }

    return (
        <section>
            <h3>Feedback to ass</h3>

            <form action="" style={{marginBottom: '2rem'}}>
                <label htmlFor="name">Your Name:</label>
                <input 
                    type="text" id="name" 
                    className="control" 
                    value={form.name} 
                    onChange={handleNameChange} 
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                    }}
                />
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

            <StateVsRef />
        </section>
    )
}

export default FeedbackSection