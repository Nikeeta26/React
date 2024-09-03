// import { useState } from "react"
// import { useFormik } from 'formik';

// //formik
// const validate = values => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = 'Username is Required';
//     // } else if (values.username.length > 15) {
//     //   errors.username = 'Must be 15 characters or less';
//     }
  
//     return errors;
//   };

// export default function CommentForm({addNewComment}){
//     // let[formData, setFormData] = useState({
//     //     username:"",
//     //     remarks:"",
//     //     rating:"5",   
//     // });

//     const formik = useFormik({
//         initialValues: {
//             username:"",
//             remarks:"",
//             rating:"5",
//         },
//         validate,
//         onSubmit: values => {
//           alert(JSON.stringify(values, null, 2));
//         },
//       });

// //   let handleInputChange = (event)=>{
// //       setFormData((currData)=>{
// //          return {...currData,[event.target.name]:event.target.value};
// //       })
// //   }

// //   let[isvalid, setValid] = useState(true);

// // let FormSubmit = (event)=>{
// //     if(!formData.username){
// //         setValid(false);
// //         console.log("username is require");
// //         event.preventDefault();
// //         return;

// //     }
// //     console.log(formData);
// //     addNewComment(formData);
// //    event.preventDefault();
// //    setFormData(
// //     {
// //         username:"",
// //         remarks:"",
// //         rating:"5"
// //     });
// // }

//     return(
//         <div>
//             <h4>Give a comment</h4>
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="username">Username :</label>&nbsp;&nbsp;
//             {/* value={formData.username} : add in inpute */}
//             <input placeholder="Username" type="text" name="username"  value={formik.values.username} id="username" onChange={formik.handleChange}></input>
//             {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
//             {/* {!isvalid?<p>username is require:</p>:<p></p>} */}
//             {/* {!isvalid && <p>username is required</p>} */}

//             <br></br>
//             <br></br>
//             <label htmlFor="remarks">Comment :</label>&nbsp;&nbsp;
//             <textarea name="remarks"  value={formik.values.remarks} id="remarks" placeholder="add some remarks" onChange={formik.handleChange}></textarea>
//             <br></br>
//             <br></br>
//             <label htmlFor="rating">rating :</label>&nbsp;&nbsp;
//             <input placeholder="rating" type="number" min="1" max="5" id="rating" value={formik.values.rating}  name="rating" onChange={formik.handleChange}></input>
//             <br></br>
//             <br></br>
//             <button type="submit">Add Comment</button>

//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
              
//         </form>
//         </div>
//     )
// }

import { useState } from "react";

export default function CommentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    rating: 5,
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    //
    addNewComment(formData);

    event.preventDefault();
    setFormData({
      userName: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div>
      <h2>Comment From</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">UserName : </label>
        <input
          type="text"
          placeholder="username"
          value={formData.userName}
          onChange={handleInputChange}
          id="uname"
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks : </label>
        <textarea
          value={formData.remarks}
          placeholder="add few Remarks"
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}