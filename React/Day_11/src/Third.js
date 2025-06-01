import GlobalContext from "./Global"
import { useContext } from "react"

export default function Third(){
 const {count,setCount} = useContext(GlobalContext);

    return(
        <>
        <h2>I am printng: {count}</h2>
        <button onClick={()=> setCount(count+5)}>incerement</button>
        
        </>
    )
}