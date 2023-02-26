import Header from './Header';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateAddress() {

    const params = useParams()
    const Id = params.Id

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    const navigate = useNavigate()

    async function update(addressId) {
        const userId = localStorage.getItem("userId")
        const body = { userId, name, email, phone, address }
        let options = {
            url: `https://address-book-ogo9.onrender.com/updateAddress/${addressId}`,
            method: "PUT",
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

    const [data, setData] = useState([])
    const getData = async function register() {
        let options = {
            url: `https://address-book-ogo9.onrender.com/getAddress/${Id}`,
            method: "get",
            headers: {
                authorization: localStorage.getItem('token'),
            }
        }
        const result = await axios(options)
        setData(result.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Header />
            <br />
            <br />
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" className='form-control' defaultValue={data.name}
                    placeholder='name' onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" className='form-control' defaultValue={data.email}
                    placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="text" className='form-control' defaultValue={data.phone}
                    placeholder='phone number' onChange={(e) => setPhone(e.target.value)} />
                <br />
                <input type="text" className='form-control' defaultValue={data.address}
                    placeholder='address' onChange={(e) => setAddress(e.target.value)} />
                <br />
                <button className='btn btn-primary' onClick={()=>update(data._id)}>Update</button>
            </div>
        </>
    )
}


export default UpdateAddress