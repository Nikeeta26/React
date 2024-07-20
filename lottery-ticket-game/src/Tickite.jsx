import { useState } from "react";

export default function Tickite(){
  let randomNum = Math.floor(Math.random()*100)+100;
  const ticketString = String(randomNum).padStart(3, '0'); // Ensure 3 digits

  let  sumOfDigits = ticketString
  .split('')
  .reduce((sum, digit) => sum + digit, 0);

    let[ticket, setTicket] = useState("");
    let[message, setMessage] = useState("");
     

    let data = () =>{
        setTicket(ticketString);
        if(sumOfDigits == 15 ){
            setMessage("congratulation ")
        }
        else{
            setMessage("Sorry, you did not win, Try again");
        }
        console.log(ticket);
    }
    return(
    <div><span>hello</span>
       <button onClick={data}>show</button>
       <p>Tickit Number:&nbsp;{ticket}</p>
       <p>{message}</p>
    </div>
   
   
   )
}