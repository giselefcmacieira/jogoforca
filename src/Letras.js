import Letra from "./Letra";

export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className="container-letras">
            {alfabeto.map((letra, indice) => <Letra letra={letra.toUpperCase()} indice={indice} hab={(letra === 'a' ? false : true)}/>)}
        </div>
    )
}
