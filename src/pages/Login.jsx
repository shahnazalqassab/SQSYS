import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../services/User'

export const Login = ({ setUser }) => {
    let navigate = useNavigate()

    const initialState = {
        username: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialState)

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const payload = await loginUser(formValues)

        
        setFormValues(initialState)
        setUser(payload)
        localStorage.setItem('token', user.token)
        navigate('/index')

        } catch (error) {
            console.error('Login failed:', error)
            alert('Login failed. Please check your credentials.')
        }
    }

    return (
        <div className="login-css">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formValues.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                />
                <button disabled={!formValues.username || !formValues.password} type="submit">Login</button>
            </form>
        </div>
    )
}