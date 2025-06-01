import React from 'react'

export default function Decrement({counts,setCounts}) {
  return (
    <>
      <button onClick={()=>setCounts(counts-1)}>Decrement</button>
    </>
  )
}



//state lifting:- 
// usecontex:-
//stateLifting :
/*parent

child_1(increment button)    child_29(decrement button0*/