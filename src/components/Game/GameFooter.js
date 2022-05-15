

export default function GameFooter({ buttonAnwser, setbuttonAnwser, deck }) {

    let qtdPerguntas = deck.length;
    let perguntasRespondidas = 0;

    
    
    return (
        <div className="footer">
            <h4>{perguntasRespondidas}/{qtdPerguntas} CONCLUÍDOS</h4>
            <div className="icones">
                {buttonAnwser.map((elemento, index) => <ion-icon class={buttonAnwser[index].color} name={buttonAnwser[index].icon}></ion-icon>)}
            </div>
        </div>

    )
}