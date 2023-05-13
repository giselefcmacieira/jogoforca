


export default function Jogo(props){
    const {habLetras, setHabLetras, erros, setErros, imgForca, setImgForca, arrayPalavra, setArrayPalavra, palavra, setPalavra, letrasCorretasSelecionadas, setLetrasCorretasSelecionadas, classVenceuOuPerdeu, setClassVenceuOuPerdeu} = props;
    console.log(palavra);
    
    function habLet(){
        setHabLetras(true);
        setErros(0);
        const arrayPalavraa = [];
        for(let i = 0; i < arrayPalavra.length; i++){
              arrayPalavraa.push(' _');
        }
        setPalavra(arrayPalavraa);
    }
    return(
        <div className='container-jogo'>
            <img className= "forca" src={imgForca} alt="forca"/>
            <div className='container-botao-palavra'>
                <button disabled={(habLetras === true ? "disabled" : "")} onClick={habLet} className='botao'>
                    Escolher palavra
                </button>
                <p className={`palavra ${classVenceuOuPerdeu}`}>{palavra}</p>
            </div>
        </div>
    )
}