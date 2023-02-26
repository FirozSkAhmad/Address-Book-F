import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './Login';
import Register from "./Register";
import Home from './Home';
import AddAddress from './AddAddress';
import Protucted from './Protucted';
import UpdateAddress from './UpdateAddress';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Protucted Component={Login} />} />
          <Route path='/register' element={<Protucted Component={Register} />} />
          <Route path='/addAddress' element={<Protucted Component={AddAddress} />} />
          <Route path='/updateAddress/:Id' element={<Protucted Component={UpdateAddress} />} />
          <Route path='/' element={<Protucted Component={Home} />} />
          <Route path='/*' element={<Navigate to="/register"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
