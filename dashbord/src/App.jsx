import { useState } from 'react'
import './App.css'

import Layout from './components/Layout'
import Header from './components/Header'

function App() {
  const [toggle,setToggle] = useState(false)
  function toggleSidebar(value){
    setToggle(value)
  }
  return (
   <>
   <Header toggle={toggle} setTogle={toggleSidebar}/>
   <Layout toggle={toggle} setTogle={toggleSidebar}/>
   </>
  )
}

export default App
