import React from 'react';

//How I did it
// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Intro section title</h1>
//             <h3 className="centered" style={{ color: '#666'}}>Intro section subtitle</h3>
//         </section>
//     );
// }

//How React did it
export  default function IntroSection() {
    return React.createElement('section', null, [
        React.createElement('h1', { className: 'centered', key:'specialKey-1' }, 'Intro section title'),
        React.createElement('h3', { className: 'centered', key:'specialKey-2' ,style: { color: '#666' } }, 'Intro section subtitle'),
    ])
}