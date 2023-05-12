import "./css/reset.css";
import "./css/style.css";
import Jogo from "./Jogo";
import Letras from "./Letras";
import React from 'react';
import forcainicio from './assets/img/forca0.png';
import palavras from "./palavras";

const palavra = palavras[Math.floor(Math.random() * palavras.length)];
export default function App() {
  const [habLetras, setHabLetras] = React.useState(false);
  const [erros, setErros] = React.useState('');
  const [imgForca, setImgForca] = React.useState(forcainicio);
  return (
    <>
      <Jogo habLetras={habLetras} setHabLetras={setHabLetras} 
      erros={erros} setErros={setErros} 
      imgForca={imgForca} setImgForca={setImgForca}
      palavra={palavra}/>
      <Letras habLetras={habLetras} setHabLetras={setHabLetras} />
    </>
  );
}

