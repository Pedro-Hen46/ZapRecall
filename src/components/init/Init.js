import LogoRecall from '../../images/LogoRecall.png';
import '../init/styles.css';

export default function HomeScreen() {

    return (
        <div className='Home'>
            <img src={LogoRecall} alt="Logo do Zap Recall" />
            <h1>ZapRecall</h1>
            <button className="btn_Home">Iniciar Recall!</button>

        </div>

    );
}