import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
