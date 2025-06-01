import GlobalContext from "./Global"
import { useContext } from "react"


function Fifth(){
    const [count,setCount] = useContext(GlobalContext)
    return(
        <>
        <p>Mai hun 5th page {count}</p>
        </>
    )
}

export default Fifth