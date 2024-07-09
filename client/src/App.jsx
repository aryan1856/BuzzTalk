
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/SignUp';
import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

function App() {

  return (
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Toaster position="top-right"
        reverseOrder={false}/>
      </div>
  )
}

export default App
