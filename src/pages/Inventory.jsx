import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import CategoryForm from '../components/CategoryForm'

import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from '../services/Product'

const Inventory = ({ user }) => {
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
            <input type="button"
            value={showForm ? 'Cancel' : 'Products'}
            onClick={() => { setShowForm(!showForm); setFormError('') }}
            />
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
            <input type="button"
            value={showForm ? 'Cancel' : 'Categories'}
            onClick={() => { setShowForm(!showForm); setFormError('') }}
            />
            {showForm && (
                <>
                    <CategoryForm
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