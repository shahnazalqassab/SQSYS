import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const ProductList = ({ signedUser, products, onEdit, onDelete, setSelectedProduct  }) => {
    const navigate = useNavigate()
    const [editId, setEditId] = useState(null)
    const [editValues, setEditValues] = useState({})  

    // console.log('Users:', users)

    // const [filters, setFilters] = useState ({
    //     name: '',
    //     selling_price: '',
    //     cost_price: '',
    //     key_features: '',
    //     status: 'in stock',
    //     quantity_available: '',
    //     min_balance: '',
    //     sku: '',
    //     ean: '',
    //     tags: [],
    //     pictures: [],
    //     options: [],
    //     category: '',
    //     supplier: '',
    //     entered_by: signedUser._id
    // })

    // const handleFilterChange = (event ) => {
    //     setFilters({ ...filters, [event.target.name]: event.target.value })
    // }

//     const handleEditClick = (user) => {
//         setEditId(user._id)
//         setEditValues({
//         name: user.name,
//         email: user.email
//     })
// }

    // const handleEditChange = (event) => {
    //     setEditValues({ ...editValues, [event.target.name]: event.target.value })
    // }

    // const handleEditSave = (user) => {
    // onEdit({ ...user, ...editValues })
    // setEditId(null)
    // setEditValues({})
    // }

    // const handleEditCancel = () => {
    // setEditId(null)
    // setEditValues({})
    // }

    return (
        <div className = "products-list">
            <h2>Products List</h2>
            <p>{products.length} Product(s)</p>
            
            { products.map((product) => (
                <div key={product._id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.selling_price}</p>
                    <p>Status: {product.status}</p>
                    <button onClick={() => {
                        setSelectedProduct(product)
                        navigate(`/products/${product._id}`)
                    }}>View</button>
                    <button onClick={() => handleEditClick(product)}>Edit</button>
                    <button onClick={() => onDelete(product._id)}>Delete</button>

                    {editId === product._id && (
                        <div className="edit-form">
                            <input type="text" name="name" value={editValues.name} onChange={handleEditChange} />
                            <input type="text" name="email" value={editValues.email} onChange={handleEditChange} />
                            <button onClick={() => handleEditSave(product)}>Save</button>
                            <button onClick={handleEditCancel}>Cancel</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductList