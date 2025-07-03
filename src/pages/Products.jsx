import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../components/ProductList'

import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from '../services/Product'

const Products = ({ user }) => {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showForm, setShowForm] = useState(false)


    const [userData, setUserData] = useState(null)

    useEffect(() => {
            const fetchProducts = async () => {
            try {
                const data = await GetProducts()
                setProducts(data)
    
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }}
            fetchProducts()
        }, [])

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }
    
    return (
        <div className="products-css">
            <h1>Inventory Management</h1>
            <button onClick = {() => { setShowForm(!showForm); setFormError('') }}>
                {showForm ? 'Cancel' : 'Add New Product'}
            </button>
            {showForm && (
                <>
                    <ProductForm
                        onSubmit = {handleCreate}
                        onCancel = {() => setShowForm(false)}
                        error = {formError}
                        suppliers = {suppliers}
                    />
        
                </>
            )}
            <ProductList products = {products} setSelectedProduct={setSelectedProduct} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    )
}


export default Products