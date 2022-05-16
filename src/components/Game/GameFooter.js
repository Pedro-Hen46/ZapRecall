import Party from '../../images/party.png'
import Sad from '../../images/sad.png'

export default function GameFooter({ buttonAnwser, deck, key, contador }) {

    // console.log(contador);
    let qtdPerguntas = deck.length;
    let perguntasRespondidas = buttonAnwser.length;
    const resultado = '';

    return (

        <div className={qtdPerguntas === perguntasRespondidas ? 'mostraResultado' : 'footer'}>
            {qtdPerguntas === perguntasRespondidas ? <div className='tituloResultado'> <img className='imgResultado' src={contador === 0 ? Party : Sad} /> <h4 className='negrito'>{contador === 0 ? 'Parabéns !' : 'Putz...'}</h4>
                <h4 className='resenha'>{contador === 0 ? 'Você não esqueceu de nenhum Flashcard' : 'Ainda faltam alguns... Mas não desanime!'}</h4> </div> :
                ''}

            <h4>{perguntasRespondidas}/{qtdPerguntas} CONCLUÍDOS</h4>
            <div className="icones">
                {buttonAnwser.map((elemento, index) => <ion-icon key={index} class={elemento.color} name={elemento.icon}></ion-icon>)}
            </div>
        </div>

    )
}