import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Index = ({ signedUser }) => {
    let navigate = useNavigate()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (signedUser) {
            setUserData(signedUser)
        } else {
            navigate('/user/login')
        }
    }, [signedUser, navigate])

    return (
        <div className="index-css">
            <h1>Welcome to your dashboard, {userData ? userData.username : 'Guest'}</h1>

        </div>
    )
}


export default Index