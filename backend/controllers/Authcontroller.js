const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const Signup = async (req, res) => {
    try{
    const { name, email, password } = req.body;
    console.log("Signup request body:", req.body);
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
        name,
        email,
        password,
    });
    newUser.password = await  bcrypt.hash(password, 10);
    await newUser.save();
    res.status(200).json({ msg: "User registered successfully",
        success: true,
     });
}
catch(error){
    res.status(500).json({ error: error.message,
        success: false,
     }); 
}
};

const Login = async (req, res) => {
    try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);

    const jwtToken = jwt.sign(
        {email: user.email, id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "5h"});

    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    res.status(200).json({ msg: "User logged in successfully",
        success: true,
        token: jwtToken,
        user: {
            name: user.name,
            email: user.email,
        }
     });

}
catch(error){
    res.status(500).json({ error: error.message,
        success: false,
     }); 
}

};

module.exports = {
  Signup,
  Login,
};
