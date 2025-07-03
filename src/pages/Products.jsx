import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Get }

const Products = ({ user }) => {
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
        <div className="product-css">
        </div>
    )
}


export default Products