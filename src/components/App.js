import React from 'react';
import Game from './Game/Game';
import Init from './init/Init';
import '../css/reset.css';
import '../css/styles.css';

export default function App() {

    const [tela, setTela] = React.useState('Init');
    const [meta, setMeta] = React.useState();

    function MudandoTela(filhoMandou, metaZap) {
        setMeta(metaZap);
        setTela(filhoMandou);
    }
    return (
        <>
            {tela === 'Init' ? <Init MudandoTela={MudandoTela} /> : <Game meta={meta} MudandoTela={MudandoTela} />}
        </>
    );
}