const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  credentials: true,
}));


const PORT = process.env.PORT || 5000;

const connectDB = require("./Database/database");
connectDB();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth"));

app.post("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/jokes",(req,res) => {
  const jokes = {
    'one' : {name:'rud', 'age':19},
    'two' : {name:"hii", 'age': 19},
  }
  res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});