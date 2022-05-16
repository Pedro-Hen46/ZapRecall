import React from 'react'
import GameContent from './GameContent';
import GameHeader from './GameHeader';
import './styles.css'

export default function Game({MudandoTela, meta}) {
    
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
            question: 'O que é uma variavel de estado ?',
            answer: 'Ele determina o estado do componente, sendo renderizado ou não.',
        },
        {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes'
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
            
            <GameContent deck={deck} meta={meta} MudandoTela={MudandoTela}/>

        </>
    )
}