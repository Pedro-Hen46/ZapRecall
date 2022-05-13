import React from "react";

export default function GameQuestions({elemento, index, deck}){

    const [play, setPlay] = React.useState(false);
    const [pergunta, setPergunta] = React.useState('Pergunta '+(index+1));
    
    function iniciaGame() {
        const question = deck[index].question;
        setPlay(!play);
        setPergunta(question);
        
    }

    function showQuestion(){
        console.log(deck);
    }

    return ( 
        <div className= {play === false ? 'questions' : 'iniciou'}>
            <h5>{pergunta}</h5> 
            <ion-icon onClick={iniciaGame} name="play-outline"></ion-icon>
        </div>
    )

}