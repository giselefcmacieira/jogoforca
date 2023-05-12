export default function Letra(props){
    if (props.hab && !props.habLetras){
        return(
            <>
                <button disabled className="letra ">{props.letra}</button>
            </>
        )
    }else if(props.habLetras){
        return(
            <>
                <button className="letra ">{props.letra}</button>
            </>
        )
    }
    
}