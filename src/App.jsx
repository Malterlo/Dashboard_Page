import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
