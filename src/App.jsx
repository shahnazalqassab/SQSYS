import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CheckSession } from './services/User'
import NavBar from './components/NavBar'
import Sidebar from './components/SideBar'
import Footer from './components/Footer'
import Dashboards from './pages/Dashboards'
import Home from './pages/Home'
import Contact from './pages/ContactUs'
import Login from './pages/Login'
import Administration from './pages/Administration'
import Inventory from './pages/Inventory'
import Suppliers from './pages/Accounting'
import './styles/App.css'

const App = () => {
  const navigate = useNavigate()
  const [signedUser, setSignedUser] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  
  }, [])
  
  const handleLogout = () => {
    setSignedUser(null)
    localStorage.clear()
    navigate('/')
  }

  const checkToken = async () => {
    const signedUser = await CheckSession()
    setSignedUser(signedUser)
  }

  return (
    <div className = "app-root">
      <header>
      <NavBar signedUser={signedUser} handleLogout={handleLogout} />
      </header>

      <div className = "app-with-sidebar">
        {signedUser && <Sidebar signedUser={signedUser} handleLogout={handleLogout} />}


      <main className = "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={<Login setSignedUser={setSignedUser} />} />
          <Route path="/user/:id/dashboards" element={<Dashboards signedUser={signedUser} />} />
          <Route path="/user/:id/administration" element={<Administration signedUser={signedUser} />} />
          <Route path="/user/:id/accounting" element={<Suppliers signedUser={signedUser} />} />
          <Route path="/user/:id/inventory" element={<Inventory signedUser={signedUser} />} />


          {/* <Route path="/user/create" element={<CreateUser setUser={setUser} />} /> */}
        </Routes>
      </main>
      </div>
      <Footer />
      </div>
  )


}

export default App
