import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register } from '../../redux/actions/auth'

const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const {user, isLoggedIn} = useSelector ((state) => state.auth)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // useEffect(() => {
  //     if (isLoggedIn || user) {
  //         navigate("/")
  //     }
  // }, [isLoggedIn, navigate, user])

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <div className='register'>
        <h1>REGISTER</h1>
        <div className="registerContainer" >
            <form className='registerForm' onSubmit={onSubmit}>
                <input className='registerInputEmail' type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input className='registerInputEmail' type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input  className="registerInputPassword" type="password" placeholder='Enter password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input  className="registerInputPassword" type="password" placeholder='Enter password'value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register