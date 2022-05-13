import GameQuestions from "./GameQuestions"


export default function GameContent({ deck }) {


    return (
        <>
            {deck.map((elemento, index) => <GameQuestions elemento={elemento} index={index} key={index} deck={deck} />)}
        </>
    )
}