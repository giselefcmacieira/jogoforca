import Letra from "./Letra";

export default function Letras(props){
    const {habLetras, setHabLetras} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className="container-letras">
            {alfabeto.map((letra, indice) => <Letra 
            key = {letra}
            letra={letra.toUpperCase()} 
            hab={(alfabeto.includes(letra) ? true : false)}
            habLetras = {habLetras}/>)}
        </div>
    )
}

