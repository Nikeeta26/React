import { useState } from "react"

export default function LudoBoard(){
    
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);

    let[moves, setMoves] = useState({blue:0, red:0, green:0, yellow:0});
    let[arr, setArr] = useState([""]);

    let updateBlue = ()=>{
        // moves.blue += 1;
        //console.log("moves:",moves.blue);
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
            setArr((previousArr)=>{
                return [...previousArr, "blue moves"];
            });
            console.log(arr);
             return {...previouMoves, blue:previouMoves.blue=random}
        });
    // 1: we can write 1 or 2
    // setArr((previousArr)=>{
    //     return [...previousArr, "blue moves"];
    // });
    console.log(arr);
    
    //2: 
    // setArr([...arr, "blue moves"]);
    // console.log(arr);
     }

    let updateYellow = ()=>{
        // moves.blue += 1;
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, yellow:previouMoves.yellow=random}
        });
    }

    let updateGreen = ()=>{
        // moves.blue += 1;
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, green:previouMoves.green=random}
        });
    }

    let updateRed = ()=>{
        // moves.blue += 1;
        console.log("moves:",moves.b);
        //setMoves({...moves,   blue:moves.blue + 1});
        setMoves((previouMoves)=>{
             return {...previouMoves, red:previouMoves.red=random}
        });
    }


    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                {/* <p>{random}</p> */}
                {/* <p>{arr}</p> */}
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