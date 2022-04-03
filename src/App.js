import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ChangePassword from './components/UpdatePassword';
import Users from './components/Users';
import User from './components/User';
import AddNewUser from './components/AddUser';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className='home'>
      <BrowserRouter>
      `<NavBar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:userId' element={<User />} />
          <Route path='/change-password' element={<ChangePassword />} />
          <Route path='/users/new-user' element={<AddNewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
