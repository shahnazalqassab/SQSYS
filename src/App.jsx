import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

const App = () => {
  const [user, setUser] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')

    const checkToken = async () => {
      const user = await CheckSession()
      setUser(user)
    }

    if (token) {
      checkToken()
    }
  }, [])
  
  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />

      <main>
        <Routes>
          
        </Routes>
      </main>
    </>
  )


}

export default App
