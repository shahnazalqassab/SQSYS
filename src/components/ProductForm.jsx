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
    
    const handleChange = (event) => {
    // For file input
    if (event.target.type === 'file') {
        setForm({ ...form, pictures: Array.from(event.target.files) })
    } else {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    }
    
    
}

    
    return (
        <div className="product-form">
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="sku">SKU</label>
                <input
                    type="text"
                    name="sku"
                    id="sku"
                    placeholder="SKU"
                    value={form.sku}
                    onChange={handleChange}
                    required
                />

                <input type= "button" value="search"
                onClick={() => {
                    if (form.sku) {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(form.sku)}`, '_blank')
            }
                }}
                />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="selling_price">Selling Price</label>
                <input
                    type="number"
                    name="selling_price"
                    id="selling_price"
                    placeholder="Selling Price"
                    value={form.selling_price}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="cost_price">Cost Price</label>
                <input
                    type="number"
                    name="cost_price"
                    id="cost_price"
                    placeholder="Cost Price"
                    value={form.cost_price}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="key_features">Key Features</label>
                <input
                    type="text"
                    name="key_features"
                    id="key_features"
                    placeholder="Key Features"
                    value={form.key_features}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="status">Status</label>
                <select
                    name="status"
                    id="status"
                    value={form.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="in stock">In Stock</option>
                    <option value="out of stock">Out of Stock</option>
                    <option value="pre-order">Pre-order</option>
                    <option value="discontinued">Discontinued</option>
                    <option value="coming soon">Coming Soon</option>
                </select>

                <label htmlFor="quantity_available">Quantity Available</label>
                <input
                    type="number"
                    name="quantity_available"
                    id="quantity_available"
                    placeholder="Quantity Available"
                    value={form.quantity_available}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="min_balance">Minimum Balance</label>
                <input
                    type="number"
                    name="min_balance"
                    id="min_balance"
                    placeholder="Minimum Balance"
                    value={form.min_balance}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="ean">EAN</label>
                <input
                    type="text"
                    name="ean"
                    id="ean"
                    placeholder="EAN"
                    value={form.ean}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="tags">Tags (comma separated)</label>
                <input
                    type="text"
                    name="tags"
                    id="tags"
                    placeholder="Tags"
                    value={form.tags}
                    onChange={handleChange}
                />

                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    id="category"
                    value={form.category}
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat._id} value={cat.name}>{cat.name}</option>
                    ))}
                </select>

                <label htmlFor="pictures">Upload Picture(s)</label>
                <input
                    type="file"
                    name="pictures"
                    id="pictures"
                    accept="image/*"
                    multiple
                    onChange={handleChange}
                />

                <button type="submit">Create</button>

                {(error || usernameExists) && (
                    <div className="form-error">
                        {error && <div>{error}</div>}
                        {usernameExists && <div>Product name already exists.</div>}
                    </div>
                )}
            </form>
        </div>
    )
}

export default ProductForm