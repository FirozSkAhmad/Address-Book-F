import Header from './Header';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function login() {
        const credentials = { email, password }
        let options = {
            url: "http://localhost:4000/login",
            method: "POST",
            data: credentials,
        }
        const obj = await axios(options)
        const token = obj.data.token
        const tokenData = jwt_decode(token)
        console.log(tokenData.name)
        localStorage.setItem("token", token);
        localStorage.setItem("userId", tokenData.userId);
        localStorage.setItem("name", tokenData.name);
        if (token) {
            navigate('/')
        }
    }
    return (
        <>
            <Header />
            <br />
            <br />
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" className='form-control'
                    placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" className='form-control'
                    placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button className='btn btn-primary' onClick={login}>Login</button>
            </div>
        </>
    )
}

export default Login