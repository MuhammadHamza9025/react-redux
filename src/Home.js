import React, { useContext, useReducer } from 'react'
import { fname ,lname} from './App'

export default function Home() {

    
    const reducer=(currstate,action)=>{
        switch(action){
        case  'Increment':
      return (currstate+1 )
        case  'Decrement':
      if(currstate<=0)
      {
        return currstate=0;
      }
      else{return (currstate-1 )}
  
    }

    }
    const [state,dispatch]=useReducer(reducer,0);
  return (
    <>
    <h1>{state}</h1>
<button onClick={()=>dispatch("Increment")}>Increment</button>
<button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </>
  )
}
