import React from 'react'
import GameContent from './GameContent';
import GameFooter from './GameFooter';
import GameHeader from './GameHeader';
import './styles.css'

export default function Game() {

    const deck = [
        {
            question: 'O que é JSX ?', 
            answer:'Uma extensão de linguagem do JavaScript',
        },
        {
            question: 'O React é __ ?',
            answer: 'uma biblioteca JavaScript para construção de interfaces',
        },
        {
            question: 'Componentes devem iniciar com __ ?',
            answer: 'Letra MAIUSCULAS',
        },
        {
            question: 'Podemos colocar __ dentro do JSX ?',
            answer: 'expressões',
        }, 
        {
            question: 'O ReactDOM nos ajuda __  ?',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
        },
        {
            question: 'Quem é o milhor?',
            answer: 'O Cristiano Ronaldo ',
        },
        {
            question: 'Qual a melhor linguagem de programação do Mundo ?',
            answer: 'Ainda não sei, estou tentando descobrir. ',
        }
    ]
    shuffleArray(deck);
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr;
    }
 
    return (
        <>
            <GameHeader />
            
            <GameContent deck={deck} />

        </>
    )
}