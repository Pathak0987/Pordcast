const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Debugging step: Print the MongoDB URI to confirm it's being loaded
console.log('MongoDB URI:', process.env.MONGODB_URI);

const connectDB = async () => {
    try {
        // Ensure the connection string is being read correctly
        if (!process.env.MONGODB_URI) {
            throw new Error('MongoDB URI is not defined in the environment variables');
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

connectDB();
