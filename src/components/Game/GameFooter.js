import Party from '../../images/party.png'
import Sad from '../../images/sad.png'

export default function GameFooter({ buttonAnwser, deck, key, control }) {

    let qtdPerguntas = deck.length;
    let perguntasRespondidas = buttonAnwser.length;
    const resultado = 0;

    return (

        <div className={qtdPerguntas === perguntasRespondidas ? 'mostraResultado' : 'footer'}>
            {qtdPerguntas === perguntasRespondidas ? <div className='icones'> <img src={ control === 0 ? Party : Sad}/> <h4>{resultado}</h4> 
            <p><h4>Você não esqueceu de nenhum Flashcard</h4></p> </div> :
                ''}

            <h4>{perguntasRespondidas}/{qtdPerguntas} CONCLUÍDOS</h4>
            <div className="icones">
                {buttonAnwser.map((elemento, index) => <ion-icon key={index} class={elemento.color} name={elemento.icon}></ion-icon>)}
            </div>
        </div>

    )
}