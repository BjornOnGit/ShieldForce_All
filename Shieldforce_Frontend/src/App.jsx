import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarComp/>
    </div>
  )
}

export default App
