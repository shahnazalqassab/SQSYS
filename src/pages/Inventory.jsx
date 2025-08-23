import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import CategoryList from '../components/CategoryList'
import CategoryForm from '../components/CategoryForm'
import SupplierList from '../components/SupplierList'
import SupplierForm from '../components/SupplierForm'
import InventoryDropTab from '../components/InventoryDropTabs'

import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from '../services/Product'

const Inventory = ({ signedUser }) => {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])
    // const [showForm, setShowForm] = useState(false)
    const [formError, setFormError] = useState('')
    const [activeTab, setActiveTab] = useState('')

    const [productData, setProductData] = useState(null)

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
        setActiveTab(option)
        setFormError('')
        setProductData(null)
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

            {activeTab === 'products-list' && (
                <ProductList 
                    products={products} 
                    onEdit={(product) => {
                        setProductData(product)
                        setActiveTab('create-product')
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


            {activeTab === 'create-product' && (
                <ProductForm 
                    onSubmit={handleCreate} 
                    onCancel={() => setActiveTab('')} 
                    formError={formError} 
                    productData={productData} 
                />
            )}


            {activeTab === 'categories-list' && (
                <CategoryList signedUser={signedUser} />
            )}  

            {activeTab === 'create-category' && (
                <CategoryForm 
                    onCancel={() => setActiveTab('')} 
                    formError={formError} 
                />
            )}

            {activeTab === 'suppliers-list' && (
                <SupplierList signedUser={signedUser} />
            )}

            {activeTab === 'create-supplier' && (
                <SupplierForm 
                    onCancel={() => setActiveTab('')} 
                    formError={formError} 
                />
            )}
        </div>
    )
}


export default Inventory