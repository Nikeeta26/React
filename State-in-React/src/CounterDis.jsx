import { useState } from "react"

export default function CounterDis(){
    let arr = useState(0);
   console.log(arr);
    return(
        <div>
           <h2>Count=</h2> 
           <button>Increase Count</button>
        </div>
        
    )
}