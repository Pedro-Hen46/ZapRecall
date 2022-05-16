import LogoRecall from '../../images/LogoRecall.png';
import '../init/styles.css';

export default function Init({ MudandoTela }) {
    
    let metaZap = 0;

    const hanleChangeZapGoal = e => {
        metaZap = e.target.value;
    }

    return (
        <div className='Home'>
            <img src={LogoRecall} alt="Logo do Zap Recall" />
            <h1>ZapRecall</h1>
            
            <input min='1' max='8' className='inputZap' type='number' placeholder='Digite a sua meta de zaps aqui...'
            onChange={e => hanleChangeZapGoal(e)}></input>
            
            <button onClick={() => MudandoTela('Game', metaZap)} className="btn_Home">Iniciar Recall!</button>

        </div>

    );
}