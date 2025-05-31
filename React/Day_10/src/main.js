/* learn when we use useEffect and useMemo
  useMemo hook
1. Counter btton: increase
2. Input field: Fibonacci number 0 1 1 2 3 5 8 13 21 34 55 ...*/
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';

//useMemo hook
//1. Counter btton: increase
//2. Input field: Fibonacci number 0 1 1 2 3 5 8 13 21 34 55 ...
function App() {

   const [count, setCount] = React.useState(0);
   const [number, setNumber] = React.useState("");
   // const [result, setResult] = React.useState(0);

   //___________useMemo___________

   // function Fibonacci(n) {  //es fun ko hm global function me rakh rhe hai  
   //    if (n <= 1)
   //       return n;
   //    return Fibonacci(n - 1) + Fibonacci(n - 2);

   //  }

   //___________useCallback___________

   const Fibonacci = useCallback((n) => {
      if (n <= 1)
         return n;
      return Fibonacci(n - 1) + Fibonacci(n - 2);
   }, [])

 
    //_________call  useMemo__________
   const result = useMemo(() => Fibonacci(number), [number]);    //ek hi baar me sara kaaam kr de rha h


   //_____________using useEffect_____________--
   //  useEffect(() => {
   //     setResult(Fibonacci(number));
   //  }, [number]);

   return (
      <>
         <h1>Counter is: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increament</button>
         <button onClick={() => setCount(count - 1)}>Decreament</button>

         <div>
            <h2>Fibonacci No is: {result}</h2>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
         </div>

      </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
