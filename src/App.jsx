import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CheckSession } from './services/User'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Home from './pages/Home'
import Contact from './pages/ContactUs'
import Login from './pages/Login'
import Users from './pages/Users'
import Products from './pages/Products'
import Suppliers from './pages/Suppliers'
import './styles/App.css'

const App = () => {
  const navigate = useNavigate()
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
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={<Login setUser={setUser} />} />
          <Route path="/user/:id/index" element={<Index user={user} />} />
          <Route path="/user/:id/users" element={<Users user={user} />} />
          <Route path="/user/:id/suppliers" element={<Suppliers user={user} />} />
          <Route path="/products" element={<Products user={user} />} />


          {/* <Route path="/user/create" element={<CreateUser setUser={setUser} />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )


}

export default App
