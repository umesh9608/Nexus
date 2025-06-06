import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import stores from "./store";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";

function App(){

    return(
     <Provider store={stores}>
      <CoinCreate></CoinCreate>
     </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)



// function Fetchuser(){

//     useEffect(async()=>{

//         dispatch(LoadingData(true));
//         try{
//         const response = await fetch("Github");
//         const da = await response.json();

//         dispatch(UpdateData(da));
//         }catch(error){

//             dispatch(ErrorData("Error occure"))
//         }
        
//     })
// }

//CreateAsyncThunk : ka jarurat q padi ;-q ki multiple component me bar bar fatch user ka code bar bar likhna pd rha tha to wo code bar bar na likhna pade ek globally bna do  or us code ko call kr do   