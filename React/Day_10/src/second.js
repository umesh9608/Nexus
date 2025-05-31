//useRef :- is a React Hools that lets you referecne a value tha's not needed for rendering
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';


// function App() {
//     const [count, setCount] = useState(0);

//     const money = useRef(0);
//     // console.log(money.current);
//     return (
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increament</button>
//             <h1>Money is: {money.current}</h1>
//             <button onClick={() => {
//                 money.current = money.current + 1
//                 console.log(money.current);
//             }}>Increament</button>

//         </>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


/* Now we creat a stop watch and learn about react hooks */

function StopWatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null)
    const [isRunning, setRunning] = useState(false);

    function start() {
        if(!isRunning){
      intervalRef.current =  setInterval(() => {
            setTime(prevTime => prevTime + 1); 
            // console.log(time);
        }, 1000)
        setRunning(true);
    }
    }
    function stop() {
        if(isRunning){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
         setRunning(false);   
        }
    }

    function reset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);

    }
    return (
        <>
            <h1>Stopwatch is: {time}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch />);
