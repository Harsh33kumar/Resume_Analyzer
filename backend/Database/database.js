const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const Mongo_Uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(Mongo_Uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;