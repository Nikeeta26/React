import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function CommentForm({addNewComment}){
    let[formData, setFormData] = useState({
        username:"",
        remarks:"",
        rating:"5",
       
        
    });

  let handleInputChange = (event)=>{
      setFormData((currData)=>{
         return {...currData,[event.target.name]:event.target.value};
      })
  }

let FormSubmit = (event)=>{
    console.log(formData);
    addNewComment(formData);
   event.preventDefault();
   setFormData(
    {
        username:"",
        remarks:"",
        rating:"5"
    });
}

    return(
        <div>
            <h4>Give a comment</h4>
        <form onSubmit={FormSubmit}>
            <label htmlFor="username">Username :</label>&nbsp;&nbsp;
            <input placeholder="Username" type="text" value={formData.username} name="username" id="username" onChange={handleInputChange}></input>
            <br></br>
            <br></br>
            <label htmlFor="remarks">Comment :</label>&nbsp;&nbsp;
            <textarea value={formData.remarks} name="remarks" id="remarks" placeholder="add some remarks" onChange={handleInputChange}></textarea>
            <br></br>
            <br></br>
            <label htmlFor="rating">rating :</label>&nbsp;&nbsp;
            <input placeholder="rating" type="number" min="1" max="5" id="rating" value={formData.rating} name="rating" onChange={handleInputChange}></input>
            <br></br>
            <br></br>
            <button>Add Comment</button>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
        </form>
        </div>
    )
}