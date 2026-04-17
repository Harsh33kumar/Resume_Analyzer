import React ,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", form);

    localStorage.setItem("token", res.data.token);
    if(res.data.success) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }

  };
  return (
<>
<div className = "ra_login_form">
  <h3>Login</h3>
  <form onSubmit={handleSubmit}>
    <input type="email" placeholder="email"  onChange={e => setForm({...form, email: e.target.value})} />
    <input type="password" placeholder="Password"  onChange={e => setForm({...form, password: e.target.value})} />
    <button type="submit">Login</button>

    <p><NavLink to ="/signup">Don't have an account? Sign Up</NavLink></p>
    
  </form>
  </div>
</>
  )
}

export default Login
