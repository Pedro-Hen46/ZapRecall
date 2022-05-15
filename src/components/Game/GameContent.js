import React from 'react'
import GameFooter from './GameFooter';
import GameQuestions from "./GameQuestions"


export default function GameContent({ deck, setIcon ,icon }) {

    const [buttonAnwser, setbuttonAnwser] = React.useState([{
        icon: '',
        color: '',
        type: ''
    }]);

    return (
        <>
            {deck.map((elemento, index) => 
            <GameQuestions elemento={elemento} index={index} key={index} deck={deck} buttonAnwser={buttonAnwser} setbuttonAnwser={setbuttonAnwser} />)}

            <GameFooter setIcon={setIcon} icon={icon} setbuttonAnwser={setbuttonAnwser} buttonAnwser={buttonAnwser} deck={deck} />
        </>

    )
}