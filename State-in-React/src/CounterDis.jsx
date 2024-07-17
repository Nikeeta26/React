import { useState } from "react"

export default function CounterDis(){
    let [count, setCount] = useState(0);

   let inCount = () => {
       setCount(count + 1);
       console.log(count);
   };

   
    return(
        <div>
           <h2>Count = {count}</h2> 
           <button onClick = {inCount}>Increase Count</button>
        </div>
        
    )
}