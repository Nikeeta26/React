import { useState } from "react"
import { useFormik } from 'formik';

export default function CommentForm({addNewComment}){
    // let[formData, setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rating:"5",   
    // });

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  let handleInputChange = (event)=>{
      setFormData((currData)=>{
         return {...currData,[event.target.name]:event.target.value};
      })
  }

  let[isvalid, setValid] = useState(true);

let FormSubmit = (event)=>{
    if(!formData.username){
        setValid(false);
        console.log("username is require");
        event.preventDefault();
        return;

    }
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
            {/* {!isvalid?<p>username is require:</p>:<p></p>} */}
            {!isvalid && <p>username is required</p>}

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