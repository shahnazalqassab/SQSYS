import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import CategoryForm from '../components/CategoryForm'
import InventoryDropTab from '../components/InventoryDropTabs'

import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from '../services/Product'

const Inventory = ({ signedUser }) => {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])
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



    const handleInventorySelect = (option) => {
        switch (option) {
            case 'products-list':
                setShowForm(false)
                break
            case 'create-product':
                setShowForm(true)
                break
            case 'categories-list':
                // Handle categories list selection
                break
            case 'create-category':
                // Handle create category selection
                break
            case 'suppliers-list':
                // Handle suppliers list selection
                break
            case 'create-supplier':
                // Handle create supplier selection
                break
            default:
                console.warn('Unknown inventory option selected:', option)
        }

    }

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

    
    return (
        <div className="inventory-css">
            <h1>Inventory Management</h1>
            
            <InventoryDropTab signedUser={signedUser} onSelect={handleInventorySelect}/>

            {showForm ? (
                <ProductForm 
                    onSubmit={handleCreate} 
                    onCancel={() => setShowForm(false)} 
                    formError={formError} 
                    userData={userData} 
                />
            ) : (
                <ProductList 
                    products={products} 
                    onEdit={(product) => {
                        setUserData(product)
                        setShowForm(true)
                    }} 
                    onDelete={async (productId) => {
                        try {
                            await DeleteProduct(productId)
                            setProducts(products.filter(product => product._id !== productId))
                        } catch (error) {
                            console.error('Failed to delete product:', error)
                        }
                    }} 
                />
            )}
        </div>
    )
}


export default Inventory