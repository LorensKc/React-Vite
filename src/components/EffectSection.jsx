import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import { useState } from "react"

function EffectSection() {
    const [modal, setModal] = useState(false)
    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>
            <Button onClick={openModal}>Open Information</Button>

            <Modal open={modal}>
                <h3>Hello from Modal</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Illo rem ipsam perferendis earum dignissimos eaque facere, aspernatur amet quam, sapiente 
                    ea ad eveniet cumque voluptatum libero cupiditate tenetur provident culpa!
                </p>
                <Button onClick={() => setModal(false)}>Close Modal</Button>
            </Modal>
        </section>
    )
}

export default EffectSection