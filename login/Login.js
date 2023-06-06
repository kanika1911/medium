import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.css'

const Login = () => {
  const navigate = useNavigate()

  const { login, getAllData } = useContext(AuthContext)
  const email = useRef('')
  const password = useRef('')
  const handleClick = async (e) => {
    e.preventDefault()
    await getAllData()
    await login({
      email: email.current.value,
      password: password.current.value,
    })
    navigate('/blogs')
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello!</h1>
         
          <span><large>Don't you have an account?</large></span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" ref={email} placeholder="Username" required />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              required
            />
            <button type="submit" onClick={handleClick}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
