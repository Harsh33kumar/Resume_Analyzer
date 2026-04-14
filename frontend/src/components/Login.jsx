import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Handle login logic here
  }
  return (
<>
<div className = "ra_login_form">
  <h3>Login</h3>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Login</button>

    <p><NavLink to ="/signup">Don't have an account? Sign Up</NavLink></p>
    
  </form>
  </div>
</>
  )
}

export default Login
