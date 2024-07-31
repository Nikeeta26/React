import { useState } from "react"

export default function Form(){
    // let[fullName, setFullName] = useState("nikeeta");
    // let handleNameChange = (event)=>{
    //     console.log(event.target.value);
    //     setFullName(event.target.value);  
    // }

    let[formData, setFormData] = useState({fullname:"", username:"", password:""});
    
    let handleInputData = (event)=>{
        // let fieldName = event.target.name;
        // let newdValue = event.target.value;
        setFormData( (cuuData)=>{
            // cuuData[fieldName] = newdValue;
            // return { ...cuuData };
            return{...cuuData, [event.target.name] : event.target.value}
        });
        // console.log(fieldName);
        // console.log(newValue);
    }

    let handleSubmit = (event)=>{
            event.preventDefault();
            console.log(formData);
            setFormData({
                fullname:"",
                 username:"",
                 password:""
                });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName :</label> &nbsp;
            <input placeholder="Enter the fullname" type="text" value={formData.fullname} id="fullname" onChange={handleInputData} name="fullname"></input>
            <br></br>
            <br></br>
            <label htmlFor="username">Username :</label> &nbsp;
            <input placeholder="Enter the username" type="text" value={formData.username} id="username" onChange={handleInputData} name="username"></input>
            <br></br>
            <br></br>
            <label htmlFor="password">Password :</label> &nbsp;
            <input placeholder="Enter the Password" type="password" value={formData.password} id="password" onChange={handleInputData} name="password"></input>
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
    )
}