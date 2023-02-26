import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'


function Header() {
    const name = localStorage.getItem("name")
    const navigate = useNavigate()

    function logOut() {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            {
                (!localStorage.getItem("token")) ? <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Address Book</Navbar.Brand>
                        <Nav className="me-auto links">
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </Nav>
                    </Container>
                </Navbar> : <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Address Book</Navbar.Brand>
                        <Nav className="me-auto links">
                            <Link to='/'>Home</Link>
                            <Link to='/addAddress'>Add Address</Link>
                            <Link to='/updateAddress/:Id'>Update Address</Link>
                        </Nav>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={name}
                                menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logOut}>
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            }
        </>
    )
}

export default Header