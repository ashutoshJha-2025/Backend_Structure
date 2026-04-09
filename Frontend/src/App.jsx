import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/' element={<Feed />} />
      </Routes>
    </>
  )
}

export default App;