import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../services/User'

const Login = ({ setSignedUser }) => {
    let navigate = useNavigate()

    const initialState = {
        username: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialState)
    const [error, setError] = useState('')

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value})
        setError('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const payload = await loginUser(formValues)
            console.log(payload)
            setFormValues(initialState)
            setSignedUser(payload.user)
            localStorage.setItem('token', payload.token)
            navigate(`/user/${payload.user.id}/index`)

        } catch (error) {
            console.log('Login failed:', error)
            const serverError = error?.response.data.message || 'Login failed. Please check your credentials.'
            setError(serverError)
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
                {error && (
                <div className="login-error">{error}</div>
                )}
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

export default Login