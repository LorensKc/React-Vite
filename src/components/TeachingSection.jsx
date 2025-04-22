import { ways } from '../data'
import WayToTeach from './WayToTeach'

function TeachingSection() {
    return (
        <section>
          <h1>Here`s Jhonny</h1>
          <ul>
            {ways.map(way => <WayToTeach key={way.title} {...way} />)}
          </ul>
        </section>
    )
}

export default TeachingSection