
import forca1erro from './assets/img/forca1.png';
import forca2erros from './assets/img/forca2.png';
import forca3erros from './assets/img/forca3.png';
import forca4erros from './assets/img/forca4.png';
import forca5erros from './assets/img/forca5.png';
import forca6erros from './assets/img/forca6.png';

export default function Jogo(props){
    const {habLetras, setHabLetras, erros, setErros, imgForca, setImgForca, palavra} = props;
    console.log(palavra);
    const array = palavra.split('');
    const pav =[];
    array.forEach(letra => pav.push(' _'));
    function habLet(){
        setHabLetras(true);
        setErros(0);
    }
    return(
        <div className='container-jogo'>
            <img className= "forca" src={imgForca} alt="forca"/>
            <div className='container-botao-palavra'>
                <button disabled={(habLetras === true ? "disabled" : "")} onClick={habLet} className='botao'>
                    Escolher palavra
                </button>
                <p className='palavra'>{pav}</p>
            </div>
        </div>
    )
}