import { useState } from "react";
export default function LikeButton(){
    let[isLiked,setLiked] = useState(false);
    let [isClick, seClick] = useState(0);
    let isToggele = ()=>{
        setLiked(!isLiked);
        seClick(isClick + 1);

        console.log(isLiked);
    }
    let styles={color:"red"}; 
    let divStyle = {border:"1px solid black"};
    return (
       <div style={divStyle}>
        <h3>Counter={isClick}</h3>
        <p onClick={isToggele} >
           {isLiked? (<i className="fa-solid fa-heart" style={styles}></i>):(<i className="fa-regular fa-heart" ></i>)}
        </p>
       </div>
    );
}