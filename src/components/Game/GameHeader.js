import LogoRecall from '../../images/LogoRecall.png'

export default function GameHeader(){

    return(
        <div className="header">
            <img src={LogoRecall} />
            <h1>ZapRecall</h1>
        </div>
    )
}