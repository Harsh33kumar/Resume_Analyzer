import React from 'react'
import { NavLink } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Handle signup logic here
  }
  return (
<>
  <div className="ra_signup_form">
    <h3>Sign Up</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Sign Up</button>
      <p><NavLink to="/login">Already have an account? Login</NavLink></p>
      
    </form>
  </div>
</>
  )
}

export default Signup
