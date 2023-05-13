import forca1erro from './assets/img/forca1.png';
import forca2erros from './assets/img/forca2.png';
import forca3erros from './assets/img/forca3.png';
import forca4erros from './assets/img/forca4.png';
import forca5erros from './assets/img/forca5.png';
import forca6erros from './assets/img/forca6.png';

export default function Letra(props){
    let contador = 0;
    const {key, letra, hab, habLetras, setHabLetras, erros, setErros, imgForca, setImgForca, letrasUsadas, setLetrasUsadas, arrayPalavra, setArrayPalavra, palavra, setPalavra, letrasCorretasSelecionadas, setLetrasCorretasSelecionadas, classVenceuOuPerdeu, setClassVenceuOuPerdeu} = props;


    function adicionarLetra(letraSelecionada){
        const novaArray = [...letrasUsadas, letraSelecionada];
        const arrayPalavraa = [...palavra];
        setLetrasUsadas(novaArray);
        if(arrayPalavra.includes(letraSelecionada.toLowerCase())){
            
            const novaArrayy = [...letrasCorretasSelecionadas, letraSelecionada];
            setLetrasCorretasSelecionadas(novaArrayy);

            for(let i = 0; i < arrayPalavra.length; i++){
                if(arrayPalavra[i] === letraSelecionada.toLowerCase()){
                    arrayPalavraa[i] = arrayPalavra[i];
                }else if(arrayPalavra[i] !== letraSelecionada.toLowerCase() && arrayPalavra[i] === ' _'){
                    arrayPalavraa[i] = ' _';
                }

                if(arrayPalavraa[i] === arrayPalavra[i]){
                    contador++;
                }
            }

            setPalavra(arrayPalavraa);

            if(contador === arrayPalavra.length){
                setClassVenceuOuPerdeu('verde');
                setHabLetras(false);
            }else{
                contador = 0;
            }


        }else{
            const errosb = erros;
            setErros(erros + 1);
            if(errosb === 0){
                setImgForca(forca1erro);
            }else if(errosb === 1){
                setImgForca(forca2erros);
            }else if(errosb === 2){
                setImgForca(forca3erros);
            }else if(errosb === 3){
                setImgForca(forca4erros);
            }else if(errosb === 4){
                setImgForca(forca5erros);
            }else if(errosb === 5){
                setImgForca(forca6erros);
                setClassVenceuOuPerdeu('vermelho');
                setPalavra(arrayPalavra);
                setHabLetras(false);
            }
        }
        
    }


    if (hab && (!habLetras || letrasUsadas.includes(letra))){
        return(
            <>
                <button disabled className="letra">{letra}</button>
            </>
        )
    }else if(habLetras){
        return(
            <>
                <button onClick={() => adicionarLetra(letra)} className="letra">{letra}</button>
            </>
        )
    }
    
}