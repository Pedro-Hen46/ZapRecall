import React from "react";
import Buttons from "./ButtonsAnswer";


export default function GameQuestions({ elemento, index, deck }) {

    const [play, setPlay] = React.useState(false);
    const [pergunta, setPergunta] = React.useState('Pergunta ' + (index + 1));
    const [icon, setIcon] = React.useState('play-outline');
    const [card, setCard] = React.useState('questions');
    
    const answer = deck[index].answer;

    function iniciaGame() {
        const question = deck[index].question;
        const answer = deck[index].answer;

        setPlay(!play); // AQUI VAI INICIAR O GAME

        if (play === true) {
            //o game iniciou
            setPergunta(answer)
            setCard('cardPergunta')
        } else {
            setPergunta(question)
            setCard('cardPergunta')
            setIcon('sync')
        }


    }
    
    return (
        <div className={card}>
            <h5>{pergunta}</h5>
            
            { pergunta === answer ? '' : 
                <ion-icon 
                    onClick={iniciaGame} 
                    name={icon}>
                </ion-icon> 
            }

            {pergunta === answer ? <Buttons /> : ''}
        </div>
    )

}