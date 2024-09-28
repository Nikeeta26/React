// src/components/ImageGallery.js
import { useEffect, useState } from "react";
import axios from "axios";

function ImageGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch stored images from backend
        axios.get("http://localhost:5000/api/getImages")
            .then(res => {
                setImages(res.data); // Assuming res.data contains an array of image URLs
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Image Gallery</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <img key={index} src={image.url} alt={`Uploaded ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
