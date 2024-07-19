import { useState } from "react"

export default function LudoBoard(){
     
    let[moves, setMoves] = useState({blue:0, red:0, green:0, yellow:0});
    let[count, setCount] = useState(0);

    let updateBlue = ()=>{
        // moves.blue += 1;
        console.log("moves:",moves.blue);
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, blue:previouMoves.blue+1}
        });
    }

    let updateYellow = ()=>{
        // moves.blue += 1;
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, yellow:previouMoves.yellow+1}
        });
    }

    let updateGreen = ()=>{
        // moves.blue += 1;
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, green:previouMoves.green+1}
        });
    }

    let updateRed = ()=>{
        // moves.blue += 1;
        console.log("moves:",moves.b);
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, red:previouMoves.red+1}
        });
    }


    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}