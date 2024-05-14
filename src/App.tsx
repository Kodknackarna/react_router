import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Login from './components/Login';
import Nav from './components/Nav'
import './App.css'

function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
