import forcainicio from './assets/img/forca0.png';


export default function Jogo(props){
    const {palavras, habLetras, setHabLetras, erros, setErros, imgForca, setImgForca, arrayPalavra, setArrayPalavra, palavra, setPalavra, letrasUsadas, setLetrasUsadas, classVenceuOuPerdeu, setClassVenceuOuPerdeu} = props;

    function iniciarJogo(){
        const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
        const arrayPalavraAleatoriaa = palavraAleatoria.split('');
        console.log(arrayPalavraAleatoriaa);
        setClassVenceuOuPerdeu('');
        setLetrasUsadas([]);
        setImgForca(forcainicio);
        setArrayPalavra(arrayPalavraAleatoriaa);
        setHabLetras(true);
        setErros(0);
        const arrayPalavraa = [];
        for(let i = 0; i < arrayPalavraAleatoriaa.length; i++){
              arrayPalavraa.push(' _');
        }
        setPalavra(arrayPalavraa);
    }
    return(
        <div className='container-jogo'>
            <img data-test="game-image" className= "forca" src={imgForca} alt="forca"/>
            <div className='container-botao-palavra'>
                <button data-test="choose-word" disabled={(habLetras === true ? "disabled" : "")} onClick={iniciarJogo} className='botao'>
                    Escolher palavra
                </button>
                <p data-test="word" className={`palavra ${classVenceuOuPerdeu}`}>{palavra}</p>
            </div>
        </div>
    )
}