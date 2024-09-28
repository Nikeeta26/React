// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ImageModel = require('./models/Image'); // MongoDB model

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow requests from frontend

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imageDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Store image URL
app.post('/api/storeImage', (req, res) => {
    const { imageUrl } = req.body;
    
    const newImage = new ImageModel({ url: imageUrl });

    newImage.save()
        .then(() => res.status(200).json({ message: 'Image URL saved successfully' }))
        .catch(err => res.status(500).json({ message: 'Error saving image URL', error: err }));
});

// Fetch stored images
app.get('/api/getImages', (req, res) => {
    ImageModel.find()
        .then(images => res.status(200).json(images))
        .catch(err => res.status(500).json({ message: 'Error fetching images', error: err }));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
