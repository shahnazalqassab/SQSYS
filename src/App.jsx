import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'

import { CheckSession } from './services/User'

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
