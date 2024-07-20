import { useState } from "react"
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import But from "./Button";
export default function Lottery({n=3, winningCondition}){


    let[ticket, setticket] = useState(genTicket(0));
    let isWinning = winningCondition(ticket);
    
     let buyTicket = ()=>{
        setticket(genTicket(n));
     }

    return (
       <div>
            <h1>Lottery Game:</h1>
            <div className="ticket">
             <Ticket ticket={ticket}/>
            </div>
            <br></br>
            <But action={buyTicket}/>
            {/* <button onClick={buyTicket}>Buy new Ticket</button> */}
            <h3>{isWinning && "congartulation you win" }</h3>
        </div>
    )
}