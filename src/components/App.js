import React from 'react';
import Game from './Game';
import Init from './init/Init';
import '../css/reset.css';
import '../css/styles.css';

export default function App(){

    const [tela, setTela] = React.useState('False');
    
   

    return(
        <div>
            <Init />
        </div>
    );
}