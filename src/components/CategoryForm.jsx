import { useState, useEffect } from 'react'

const CategoryForm = ({ onSubmit, error, categories = [] }) => {
    const [form, setForm] = useState({
        name: '',
    })
    const [categoryExists, setCategoryExists] = useState(false)

    useEffect(() => {
        if (form.name && categories.length > 0) {
            setCategoryExists(categories.some(category => category.name === form.name))
        } else {
            setCategoryExists(false)
        }
    }, [form.name, categories])

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (categoryExists)
            return 

        onSubmit(form)
        setForm({
            name: ''
        })
    }

    return (
        <form className="category-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange}
            required
        />
        <button type="submit">Create</button>

        {(error || categoryExists) && (
            <div className="form-error">
                {error && <div>{error}</div>}
                {categoryExists && <div>Category already exists.</div>}
            </div>
        )}

        </form>
    )
    }

export default CategoryForm