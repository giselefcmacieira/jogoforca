export default function Letra(props){
    if (props.hab){
        return(
            <>
                <button disabled className="letra ">{props.letra}</button>
            </>
        )
    }else{
        return(
            <>
                <button className="letra ">{props.letra}</button>
            </>
        )
    }
    
}