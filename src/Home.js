import Header from './Header';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const [data, setData] = useState([])
    const getData = async function register() {
        let options = {
            url: "https://address-book-ogo9.onrender.com/getAddress",
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

    const navigate = useNavigate()

    function update(id) {
        navigate(`/updateAddress/${id}`)
    }

    async function deleteAddress(id) {
        const userId = localStorage.getItem("userId")
        const body = { userId }
        let options = {
            url: `https://address-book-ogo9.onrender.com/deleteAddress/${id}`,
            method: "DELETE",
            headers: {
                authorization: localStorage.getItem('token'),
            },
            data: body
        }
        await axios(options)
        getData()
    }

    return (
        <>
            <Header />
            <br />
            <h3 style={{position:'absolute',textAlign:"left"}}>Contact Details:</h3>
            <br />
            <br />
            {(data.length > 0) ? <div className='col-sm-8 offset-sm-2'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th colSpan="2">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, IDX) => {
                                return <tr key={item._id}>
                                    <td>{IDX + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td><button className='btn btn-success' onClick={() => update(item._id)}>Update</button></td>
                                    <td><button className='btn btn-danger' onClick={() => deleteAddress(item._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div> : null}
        </>
    )
}

export default Home