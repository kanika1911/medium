import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'

const SignUp = () => {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const clickHandler = async (e) => {
    e.preventDefault()
    await axios.post(
      'http://localhost:4000/auth/signup',
      {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      },
      {
        withCredentials: true,
      },
    )
    navigate('/login')
  }

  return (
    <div className="sign">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input ref={name} type="text" required placeholder="Name" />
            <input ref={email} type="email" required placeholder="Email" />
            <input
              ref={password}
              type="password"
              required
              placeholder="Password"
            />
            <button type="submit" onClick={clickHandler}>
              Register
            </button>
          </form>
        </div>
        <div className="right">
          <h1>Welcome</h1>
          
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
