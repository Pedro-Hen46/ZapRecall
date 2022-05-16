import React from "react";

export default function ButtonsAnswer({ buttonAnwser, setbuttonAnwser, respondida, setPlay, play }) {



    return (
        <div className="botoes">
            <h4>{play}</h4>
            <button onClick={() => {
                setbuttonAnwser([...buttonAnwser, { icon: 'close-circle', color: 'red', type: 'fail' }])
                respondida('red', 'close-circle');
            }}
                className="noLembro">Não lembrei</button>

            <button onClick={() => {
                setbuttonAnwser([...buttonAnwser, { icon: 'help-circle', color: 'orange', type: 'okay' }])
                respondida('orange','help-circle')
            }}
                className="quaseLembrei">Quase não lembrei</button>

            <button onClick={() => {
                setbuttonAnwser([...buttonAnwser, { icon: 'checkmark-circle', color: 'green', type: 'zap' }])
                respondida('green','checkmark-circle')
            }}
                className="zap">Zap!</button>

        </div>

    )
}