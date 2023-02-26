import Header from './Header';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddAddress() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    const navigate = useNavigate()

    async function add() {
        console.log(name, email, phone)
        const userId = localStorage.getItem("userId")
        const body = { userId, name, email, phone, address }
        let options = {
            url: "http://localhost:4000/createAddress",
            method: "POST",
            headers: {
                authorization: localStorage.getItem('token'),
            },
            data: body,
        }
        await axios(options)
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
        navigate('/')
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
                <input type="text" className='form-control'
                    placeholder='phone number' onChange={(e) => setPhone(e.target.value)} />
                <br />
                <input type="text" className='form-control'
                    placeholder='address' onChange={(e) => setAddress(e.target.value)} />
                <br />
                <button className='btn btn-primary' onClick={add}>Add Address</button>
            </div>
        </>
    )
}

export default AddAddress