import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderH from './Header'
import Section1 from './Section1'
import Section2 from './Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderH />
      <Section1 />
      <Section2 />
    </>
  )
}

export default App
