import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Index = ({ user }) => {
    let navigate = useNavigate()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (user) {
            setUserData(user)
        } else {
            navigate('/user/login')
        }
    }, [user, navigate])

    return (
        <div className="index-css">
            <h1>Welcome to your dashboard, {userData ? userData.username : 'Guest'}</h1>
            <p>This is your personal space.</p>
        </div>
    )
}


export default Index