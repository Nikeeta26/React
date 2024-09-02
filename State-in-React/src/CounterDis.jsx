import { useState } from "react"

function init(){
    console.log("initialize ");
    return Math.floor(Math.random()*5)+1;
}

export default function CounterDis(){
    let [count, setCount] = useState(init);//initialization
    console.log("counter increase");
    // console.log("counter=",count);
   let inCount = () => {
       setCount((currCount)=>{
        return currCount + 1;

       });
       setCount((currCount)=>{
        return currCount + 1;
       });
       // when we set any random value as fix
       // setCount(25);
       
       //setCount(count + 1);
    //    console.log(count);
    //    console.log(`inside count = ${count}`);
   };

   
    return(
        <div>
           <h2>Count = {count}</h2> 
           <button onClick = {inCount}>Increase Count</button>
        </div>
        
    )
}