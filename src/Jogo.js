import forcainicio from './assets/img/forca0.png'

export default function Jogo(){
    return(
        <div className='container-jogo'>
            <img className= "forca" src={forcainicio} alt="forcainicio"/>
            <div className='container-botao-palavra'>
                <button className='botao'>
                    Escolher palavra
                </button>
                <p className='palavra'>_ _ _ _ _ _ _ _</p>
            </div>
        </div>
    )
}