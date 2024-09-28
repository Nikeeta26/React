// import { useState } from "react";
// import axios from "axios"; // Correct import for axios
// import "./App.css";

// function Image() {
//     const p = "nikeeta"; // Replace with your actual upload preset
//     const c = "dvl5zvaia"; // Your Cloudinary cloud name

//     const [image, setImage] = useState();

//     function handleFile(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const formData = new FormData();
//             formData.append("file", file);
//             formData.append("upload_preset", p); // Ensure you're using "upload_preset"

//             axios.post(`https://api.cloudinary.com/v1_1/${c}/image/upload`, formData)
//                 .then(res => {
//                     console.log(res.data);
//                     setImage(res.data.secure_url); // Optionally set the image URL to state
//                 })
//                 .catch(err => console.log(err));
//         }
//     }

//     return (
//         <>
//             <div className="nik">
//                 <h1>hello</h1>
//                 <div>
//                     <input type="file" name="image" onChange={handleFile} />
//                 </div>
//                 {image && <img src={image} alt="Uploaded" />} {/* Optionally display the uploaded image */}
//             </div>
//         </>
//     );
// }

// export default Image;


// src/components/Image.js
import { useState } from "react";
import axios from "axios";


function Image() {
    const p = "nikeeta"; // Cloudinary upload preset
    const c = "dvl5zvaia"; // Cloudinary cloud name

    const [image, setImage] = useState(null);

    function handleFile(event) {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", p);

            // Upload image to Cloudinary
            axios.post(`https://api.cloudinary.com/v1_1/${c}/image/upload`, formData)
                .then(res => {
                    console.log("Image uploaded:", res.data);
                    setImage(res.data.secure_url); // Set image URL in state

                    // Send the image URL to your backend
                    return axios.post("http://localhost:5000/api/storeImage", { imageUrl: res.data.secure_url });
                })
                .then(response => {
                    console.log("Image URL stored in DB:", response.data);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="nik">
            <h1>Upload Image</h1>
            <div>
                <input type="file" name="image" onChange={handleFile} />
            </div>
            {image && <img src={image} alt="Uploaded" />} {/* Display the uploaded image name*/}
        </div>
    );
}

export default Image;
