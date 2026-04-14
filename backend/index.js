const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const Mongo_Uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Dummy check (replace with DB)
  if (email === "admin@gmail.com" && password === "123456") {
    
    const token = jwt.sign(
      { email: email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // allow access
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to Dashboard (Protected)");
});

app.get("/profile", authMiddleware, (req, res) => {
  res.send("User Profile Data");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(Mongo_Uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    };
}

// connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});