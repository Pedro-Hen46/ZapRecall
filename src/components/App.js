import React from 'react';
import Game from './Game/Game';
import Init from './init/Init';
import '../css/reset.css';
import '../css/styles.css';

export default function App() {

    const [tela, setTela] = React.useState('Init');

    function MudandoTela(filhoMandou) {
        setTela(filhoMandou);
    }

    return (
        <>
            {tela === 'Init' ? <Init MudandoTela={MudandoTela} /> : <Game MudandoTela={MudandoTela} />}
        </>
    );
}