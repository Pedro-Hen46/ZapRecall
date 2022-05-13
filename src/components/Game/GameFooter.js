

export default function GameFooter({ MudandoTela, deck }) {

    const qtdPerguntas = deck;
    
    return (
        <div className="footer">
            <h4>0/4 CONCLUÍDOS</h4>
            <button  onClick={() => MudandoTela('Init')}  className="exit" >X</button>
        </div>

    )
}