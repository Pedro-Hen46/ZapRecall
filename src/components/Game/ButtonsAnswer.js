import React from "react";

export default function ButtonsAnswer({ buttonAnwser, setbuttonAnwser }) {


    return (
        <div className="botoes">
            <button onClick={() => setbuttonAnwser([...buttonAnwser, { icon: 'close-circle', color: 'red', type: 'fail' }])}
                className="noLembro">Não lembrei</button>

            <button onClick={() => setbuttonAnwser([...buttonAnwser, { icon: 'help-circle', color: 'orange', type: 'okay' }])} className="quaseLembrei">Quase não lembrei</button>

            <button onClick={() => setbuttonAnwser([...buttonAnwser, { icon: 'checkmark-circle', color: 'green', type: 'zap' }])} className="zap">Zap!</button>
        </div>

    )
}