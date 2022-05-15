import React from "react";
import ButtonsAnswer from "./ButtonsAnswer";

export default function GameQuestions({ index, deck, buttonAnwser, setbuttonAnwser }) {
    const [play, setPlay] = React.useState(false);
    const [pergunta, setPergunta] = React.useState('Pergunta ' + (index + 1));
    const [icon, setIcon] = React.useState('play-outline');
    const [card, setCard] = React.useState('questions');

    let color = ''
    switch (icon) {
        case 'close-circle':
        color = 'colorRed'
        break
        case 'help-circle':
        color = 'colorOrange'
        break
        case 'checkmark-circle':
        color = 'colorGreen'
        break

        default:
        color = ''
  }

    const answer = deck[index].answer;

    function iniciaGame() {
        const question = deck[index].question;
        const answer = deck[index].answer;

        setPlay(!play);

        if (play === true) {
            setPergunta(answer)
            setCard('Jogando')
        } else {
            setPergunta(question)
            setCard('Jogando')
            setIcon('sync')
        }
    }

    return (
        <div className={card}>
            <h5>{pergunta}</h5>

            {pergunta === answer ? '' :
                <ion-icon
                    onClick={iniciaGame}
                    name={icon}>
                </ion-icon>
            }

            {pergunta === answer ? <ButtonsAnswer buttonAnwser={buttonAnwser} setbuttonAnwser={setbuttonAnwser} /> : ''}
        </div>
    )

}