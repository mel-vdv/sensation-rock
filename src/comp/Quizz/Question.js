import React, { useRef} from 'react'

const Question = ({ reponse, question, propositions, suivant }) => {

    //------------------------------
    const verifierReponse = (nb) => {
        if (reponse === nb) {
            
            switch (nb) {
                case 0: div1.current.classList.add('green'); break;
                case 1: div2.current.classList.add('green'); break;
                case 2: div3.current.classList.add('green'); break;
                case 3: div4.current.classList.add('green'); break;
                default: console.log('oups');
            }
            setTimeout(() => {
                suivant();
            }, 2000);
        }
        else {
            switch (nb) {
                case 0: div1.current.classList.add('red'); break;
                case 1: div2.current.classList.add('red'); break;
                case 2: div3.current.classList.add('red'); break;
                case 3: div4.current.classList.add('red'); break;
                default: console.log('oups');
            }
            setTimeout(() => {
                suivant();
            }, 2000);
        }
    }
    //------------------------------
    const div1 = useRef();
    const div2 = useRef();
    const div3 = useRef();
    const div4 = useRef();

    //------------------------------
    return (
        <>
                <div className='question'>
                    <h2>{question}</h2>
                    <div ref={div1} onClick={() => verifierReponse(0)}>proposition 1 : {propositions[0]}</div>
                    <div ref={div2} onClick={() => verifierReponse(1)}>proposition 2 : {propositions[1]}</div>
                    <div ref={div3} onClick={() => verifierReponse(2)}>proposition 3 : {propositions[2]}</div>
                    <div ref={div4} onClick={() => verifierReponse(3)}>proposition 4 : {propositions[3]}</div>
                </div>
        </>
    )
}

export default Question