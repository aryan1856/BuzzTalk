
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/SignUp';
import Home from './pages/home/Home'
import {Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { UseAuthContext } from './context/AuthContext';

function App() {
  const {auth} = UseAuthContext();
  return (
      <div className='p-4 h-screen flex justify-center items-center'>
        <Routes>
          <Route path='/' element={!auth ? <Navigate to="/login"  /> : <Home />} />
          <Route path='/login' element={auth ? <Navigate to="/"/>  : <Login/>}/>
          <Route path='/register' element={auth ? <Navigate to="/"/>  : <Register/>}/>
        </Routes>
        <Toaster position="top-right"
        reverseOrder={false}/>
      </div>
  )
}

export default App
