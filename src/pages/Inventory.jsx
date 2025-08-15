import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import CategoryForm from '../components/CategoryForm'

import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from '../services/Product'

const Inventory = ({ signedUser }) => {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [formError, setFormError] = useState('')

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

    const handleCreate = async (productData) => {
        try {
            const newProduct = await CreateProduct({ ...productData, created_by: signedUser._id })
            setProducts([...products, newProduct])
            setShowForm(false)
            setFormError('')
    
        } catch (error) {
            const message = error?.response?.data?.message || 'Failed to create product.'
            setFormError(message)
            console.error('Failed to create product:', error)
        }
    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }
    
    return (
        <div className="inventory-css">
            <h1>Inventory Management</h1>
            <input type="button"
            value={showForm ? 'Cancel' : 'Products'}
            onClick={() => { setShowForm(!showForm); setFormError('') }}
            />
            {showForm && (
                <>
                    <ProductForm
                        signedUser = {signedUser}
                        onSubmit = {handleCreate}
                        onCancel = {() => setShowForm(false)}
                        error = {formError}
                        // suppliers = {suppliers}
                    />
        
                </>
            )}
            <input type="button"
            value={showForm ? 'Cancel' : 'Categories'}
            onClick={() => { setShowForm(!showForm); setFormError('') }}
            />
            {showForm && (
                <>
                    <CategoryForm
                        signedUser = {signedUser}
                        onSubmit = {handleCreate}
                        onCancel = {() => setShowForm(false)}
                        error = {formError}
                    />
        
                </>
            )}
            <ProductList products = {products} setSelectedProduct={setSelectedProduct} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    )
}


export default Inventory