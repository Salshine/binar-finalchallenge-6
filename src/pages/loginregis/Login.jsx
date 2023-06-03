import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth'
import GoogleLogin from '../../components/googleLogin/GoogleLogin'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const {user, isLoggedIn} = useSelector ((state) => state.auth)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // useEffect(() => {
    //     if (isLoggedIn || user) {
    //         navigate("/")
    //     }
    // }, [isLoggedIn, navigate, user])

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {email, password}

        dispatch(login(data,navigate))
    }

  return (
    <div className='login'>
        <h1>LOGIN</h1>
        <div className="loginContainer"  >
            <form className='loginForm' onSubmit={onSubmit}>
                <input className='loginInputEmail' type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input  className="loginInputPassword" type="password" placeholder='Enter password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Login</button>
            </form>
            <div className="googleLogin">
            <GoogleLogin buttonText={"Login with Google"} />
            </div>
        </div>
    </div>
  )
}

export default Login