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