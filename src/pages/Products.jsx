import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from '../services/Product'

const Products = ({ user }) => {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)


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

    return (
        <div className="product-css">
        </div>
    )
}


export default Products