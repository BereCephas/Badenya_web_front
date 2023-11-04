import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from'./components/Header'
import Hero from'./components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-[100vh]">
       <Header/>
       <Hero/>
       
    </div>
  )
}

export default App
