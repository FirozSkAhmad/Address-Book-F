import Header from './Header';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    async function register() {
        console.log(name, email, password)
        const body = { name, email, password }
        let options = {
            url: "https://address-book-ogo9.onrender.com/createUser",
            method: "POST",
            data: body,
        }
        await axios(options)
        setName("")
        setEmail("")
        setPassword("")
        navigate('/login')
    }

    return (
        <>
            <Header />
            <br />
            <br />
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" className='form-control'
                    placeholder='name' onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" className='form-control'
                    placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" className='form-control'
                    placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button className='btn btn-primary' onClick={register}>Sign Up</button>
            </div>
        </>
    )
}

export default Register