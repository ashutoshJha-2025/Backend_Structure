import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPost from './pages/MyPost';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/my-posts' element={<MyPost />} />
      </Routes>
    </>
  )
}

export default App;