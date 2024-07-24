import { useState, useEffect } from "react"
export default function Counter(){
  let[countx, setCountx] = useState(0);
   let showCountx = ()=>{
     setCountx((currData)=>{
       return currData + 1;
   });
   }

   let[county, setCounty] = useState(0);
   let showCounty = ()=>{
     setCounty((currData)=>{
       return currData + 1;
   });
   }


   useEffect(function printSomething(){
    console.log("this is side effect")
   },
   //[countx]
//    [countx, county]
[]
);

    return(
        <div>
           <h3>Count = {countx}</h3>
           <button onClick={showCountx}>create count x</button>
           <br></br>
           <br></br>
           <h3>Count = {county}</h3>
           <button onClick={showCounty}>create count y</button>
       
        </div>
    )
}