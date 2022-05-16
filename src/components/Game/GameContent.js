import React from 'react'
import GameFooter from './GameFooter';
import GameQuestions from "./GameQuestions"


export default function GameContent({ deck, setIcon ,icon, MudandoTela }) {

    let contador = 0;
    const [buttonAnwser, setbuttonAnwser] = React.useState([]);
    
    //verificando se o array tem alguma mensagem que ele nao lembrou...
    buttonAnwser.length === deck.length ? buttonAnwser.filter(elemento => elemento.type === 'fail' ? contador += 1 : '') : '';
    
    // console.log(contador);
    return (
        <>
            {deck.map((elemento, index) => <GameQuestions elemento={elemento} index={index} key={index} deck={deck} buttonAnwser={buttonAnwser} setbuttonAnwser={setbuttonAnwser} />)}

            <GameFooter contador={contador} setIcon={setIcon} icon={icon} setbuttonAnwser={setbuttonAnwser} buttonAnwser={buttonAnwser} deck={deck} MudandoTela={MudandoTela}/>
        </>

    )
}