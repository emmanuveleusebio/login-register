const mongoose = require('mongoose');


// MongoDB connection
const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI)
        console.log('mongoDB connected successfully')
    } catch (error) {
        console.log(error, 'error while connection database');
    }
}

module.exports = connectDB;
