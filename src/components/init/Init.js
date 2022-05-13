import LogoRecall from '../../images/LogoRecall.png';
import '../init/styles.css';

export default function Init({ MudandoTela }) {

    const MudarParaGame = 'Game';

    return (
        <div className='Home'>
            <img src={LogoRecall} alt="Logo do Zap Recall" />
            <h1>ZapRecall</h1>
            <button onClick={() => MudandoTela(MudarParaGame)} className="btn_Home">Iniciar Recall!</button>
        </div>

    );
}