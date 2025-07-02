import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Index from './pages/Index'
import Home from './pages/Home'
import Login from './pages/Login'

import { CheckSession } from './services/User'

import './styles/App.css'
import navigate from 'navigate'

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
    navigate('/')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login setUser={setUser} />} />
          <Route path="/user/:id/index" element={<Index user={user} />} />
          <Route path="/user/:id/users" element={<Index user={user} />} />


          {/* <Route path="/user/create" element={<CreateUser setUser={setUser} />} /> */}
        </Routes>
      </main>
    </>
  )


}

export default App
