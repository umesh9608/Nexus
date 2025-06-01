
import Third from "./Third"
import GlobalContext from "./Global"
import { useContext } from "react"

export default function Second(){
 const {count,setCount} = useContext(GlobalContext);


    return(
        <>
        <h2>hello je: {count}</h2>
        <Third/>
        </>
    )
}