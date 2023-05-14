import "./css/reset.css";
import "./css/style.css";
import Jogo from "./Jogo";
import Letras from "./Letras";
import React from 'react';
import forcainicio from './assets/img/forca0.png';
import palavras from "./palavras";


export default function App() {
  //const [arrayPalavraAleatoria, setArrayPalavraAleatoria]= React.useState([]);
  const [arrayPalavra, setArrayPalavra] = React.useState([]);
  const [palavra, setPalavra] = React.useState([]);
  const [habLetras, setHabLetras] = React.useState(false);
  const [erros, setErros] = React.useState('');
  const [imgForca, setImgForca] = React.useState(forcainicio);
  const [letrasUsadas, setLetrasUsadas] = React.useState([]);
  const [letrasCorretasSelecionadas, setLetrasCorretasSelecionadas] = React.useState([]);
  const [classVenceuOuPerdeu, setClassVenceuOuPerdeu] = React.useState(''); 
  console.log(arrayPalavra);
  return (
    <>
      <Jogo palavras={palavras}
      //arrayPalavraAleatoria ={arrayPalavraAleatoria} setArrayPalavraAleatoria = {setArrayPalavraAleatoria}
      habLetras={habLetras} setHabLetras={setHabLetras} 
      erros={erros} setErros={setErros} 
      imgForca={imgForca} setImgForca={setImgForca}
      arrayPalavra={arrayPalavra} setArrayPalavra={setArrayPalavra}
      palavra={palavra} setPalavra={setPalavra}
      letrasUsadas={letrasUsadas} setLetrasUsadas={setLetrasUsadas}
      classVenceuOuPerdeu ={classVenceuOuPerdeu} setClassVenceuOuPerdeu={setClassVenceuOuPerdeu}/>

      <Letras habLetras={habLetras} setHabLetras={setHabLetras} 
      erros={erros} setErros={setErros}
      imgForca={imgForca} setImgForca={setImgForca}
      letrasUsadas={letrasUsadas} setLetrasUsadas={setLetrasUsadas} 
      arrayPalavra={arrayPalavra} setArrayPalavra={setArrayPalavra}
      palavra={palavra} setPalavra={setPalavra}
      letrasCorretasSelecionadas={letrasCorretasSelecionadas} setLetrasCorretasSelecionadas={setLetrasCorretasSelecionadas}
      classVenceuOuPerdeu ={classVenceuOuPerdeu} setClassVenceuOuPerdeu={setClassVenceuOuPerdeu}/>
    </>
  );
}

