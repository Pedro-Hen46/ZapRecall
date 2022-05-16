import React from "react";
import ButtonsAnswer from "./ButtonsAnswer";
import imgSwapCard from '../../images/Vector-8.png';

export default function GameQuestions({ index, deck, buttonAnwser, setbuttonAnwser }) {

    const [play, setPlay] = React.useState(false);
    const [pergunta, setPergunta] = React.useState('Pergunta ' + (index + 1));
    const [icon, setIcon] = React.useState('play-outline');
    const [color, setColor] = React.useState('');
    const [card, setCard] = React.useState('questions');
    const [trava, setTrava] = React.useState(false);

    let answer = deck[index].answer;

    function iniciaGame() {
        const question = deck[index].question;
        answer = deck[index].answer;

        setPlay(!play);

        if (play === true) {
            setPergunta(answer)
            setCard('Jogando')
        } else {
            setPergunta(question)
            setCard('Jogando')
            setIcon(true)
        }
    }
    function buttonBlocked() {
        window.alert('Você já respondeu essa pergunta, tente outra...');
    }
    //- Devolutiva Visual da resposta terminada.
    function respondida(color, icon) {

        setPergunta('Pergunta ' + (index + 1))
        setCard('questions')
        setIcon(icon)
        setColor(color)
        setTrava(true);
    }

    return (
        <div className={card}>
            <h5 className={color}> {pergunta}</h5>

            {pergunta === answer ? '' : card !== 'questions' ? <img className='virarCard' src={imgSwapCard} onClick={iniciaGame} /> :
                trava === true ? <ion-icon
                    class={color}
                    onClick={buttonBlocked}
                    name={icon}>
                </ion-icon>

                    : // verificando se o botao esta bloqueado 

                    <ion-icon
                        class={color}
                        onClick={iniciaGame}
                        name={icon}>
                    </ion-icon>

            }

            {pergunta === answer ? <ButtonsAnswer respondida={respondida} play={play} setPlay={setPlay} buttonAnwser={buttonAnwser} setbuttonAnwser={setbuttonAnwser} /> : ''}
        </div>
    )

}