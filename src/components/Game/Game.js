import React from 'react'
import GameContent from './GameContent';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import './styles.css'

export default function Game({ MudandoTela }) {

    const deck = [
        {
            question: 'O que é JSX?', 
            answer:'Uma extensão de linguagem do JavaScript',
        },
        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces',
        },
        {
            question: 'Componentes devem iniciar com __',
            answer: 'Letra MAIUSCULAS',
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões',
        }, 
        {
            question: 'O ReactDOM nos ajuda __ ',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
        },
    ]

 
    return (
        <>
            <GameHeader />
            
            <GameContent deck={deck} />
            
            <GameFooter MudandoTela={MudandoTela} deck={deck} />
        </>
    )
}