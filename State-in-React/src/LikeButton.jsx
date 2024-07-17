import { useState } from "react";
export default function LikeButton(){
    let[isLiked,setLiked] = useState(false);
    // let clicked = ()=>{
    //   console.log("click");
    // }
    let isToggele = ()=>{
        setLiked(!isLiked);
        console.log(isLiked);
    }
    let styles={color:"red"};
    return (
       <div>
        <p onClick={isToggele} >
           {isLiked? (<i className="fa-solid fa-heart" style={styles}></i>):(<i className="fa-regular fa-heart" ></i>)}
        </p>
       </div>
    );
}