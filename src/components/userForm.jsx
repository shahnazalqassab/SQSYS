import { useState, useEffect } from 'react'

const UserForm = ({ onSubmit, onCancel, error, users = [] }) => {
    const [form, setForm] = useState({
        username: '',
        name: '',
        email: '',
        user_role: '',
    })
    const [usernameExists, setUsernameExists] = useState(false)

    useEffect(() => {
        if (form.username && users.length > 0) {
            setUsernameExists(users.some(user => user.username === form.username))
        } else {
            setUsernameExists(false)
        }
    }, [form.username, users])

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (usernameExists)
            return 

        onSubmit(form)
        setForm({
            username: '',
            name: '',
            email: '',
            user_role: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange}
            required
        />
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange}
            required
        />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
            required
        />
        <select name="user_role" value={form.user_role} onChange={handleChange}
            required
        >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="salesperson">Salesperson</option>
            <option value="inventory staff">Inventory Staff</option>
        </select>

        <button type="submit">Create</button>

        {error && (
        <div className="form-error">
            {error}
        </div>
        )}
        {usernameExists && (
            <div className="form-error">
                Username already exists.
            </div>
        )}

        </form>
    )
    }

export default UserForm