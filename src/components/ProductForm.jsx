import { useState, useEffect } from 'react'

const ProductForm = ({ onSubmit, error, categories = [], products = [] }) => {
    
    const [form, setForm] = useState({
        name: '',
        selling_price: '',
        cost_price: '',
        key_features: '',
        status: 'in stock',
        quantity_available: '',
        min_balance: '',
        sku: '',
        ean: '',
        tags: [],
        pictures: [],
        options: [],
        category: '',
        supplier: '',
        entered_by: ''
    })

    const [usernameExists, setUsernameExists] = useState(false)

    useEffect(() => {
        if (form.username && products.length > 0) {
            setUsernameExists(products.some(user => user.username === form.username))
        } else {
            setUsernameExists(false)
        }
    }, [form.username, products])

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
        <form className="products-form" onSubmit={handleSubmit}>
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

        {(error || usernameExists) && (
            <div className="form-error">
                {error && <div>{error}</div>}
                {usernameExists && <div>Username already exists.</div>}
            </div>
        )}

        </form>
    )
    }

export default ProductForm