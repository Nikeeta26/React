import { useState } from "react"
import CommentForm from "./CommentForm";
import "./Comment.css";
export default function Comments(){
    let[comments, setComment] = useState([{
        username:"nik",
        remarks:"nice",
        rating:"5",
    }]);

    let addNewComment = (comment)=>{
       setComment((currComments)=> [...currComments, comment]);
       console.log("comments");
    };
    return(
        <>
        <div>
           <h3>All Comments</h3>
{comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp; <br />
            <span>rating = {comment.rating}</span>
            <br />
            <span>{comment.username}</span>
          </div>
        ))}

        </div>
        <hr></hr>
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}