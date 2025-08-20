import { useState } from 'react'

const InventoryDropTab = ({ onSelect }) => {
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSupplierOpen, setIsSupplierOpen] = useState(false);


    const toggleDropdownProducts = () => {
        setIsProductOpen(!isProductOpen);
        setIsCategoryOpen(false);
        setIsSupplierOpen(false);
    }

    const toggleDropdownCategories = () => {
        setIsCategoryOpen(!isCategoryOpen);
        setIsProductOpen(false); 
        setIsSupplierOpen(false);
    }

    const toggleDropdownSuppliers = () => {
        setIsSupplierOpen(!isSupplierOpen);
        setIsProductOpen(false); 
        setIsCategoryOpen(false);
    }

    return (
        <>
        <div className="inventory-drop-menu">
            <button onClick={toggleDropdownProducts} className="drop-toggle">
                Products Management
            </button>
            {isProductOpen && (
                <div className="inventory-drop-content">
                    <ul>
                        <li onClick={() => onSelect('products-list')}>Products List</li>
                        <li onClick={() => onSelect('create-product')}>Create Product</li>
                        <li onClick={() => onSelect('restock-product')}>Re-stock Product</li>

                    </ul>
                </div>
            )}
            <button onClick={toggleDropdownCategories} className="drop-toggle">
                Categories Management
            </button>
            {isCategoryOpen && (
                <div className="inventory-drop-content">
                    <ul>
                        <li onClick={() => onSelect('categories-list')}>Categories List</li>
                        <li onClick={() => onSelect('create-category')}>Create Category</li>
                    </ul>
                </div>
            )}
            <button onClick={toggleDropdownSuppliers} className="drop-toggle">
                Suppliers Management
            </button>
            {isSupplierOpen && (
                <div className="inventory-drop-content">
                    <ul>
                        <li onClick={() => onSelect('suppliers-list')}>Suppliers List</li>
                        <li onClick={() => onSelect('create-supplier')}>Create Supplier</li>
                    </ul>
                </div>
            )}
        </div>
        </>
    )
}

export default InventoryDropTab;