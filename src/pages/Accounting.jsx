import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SupplierList from '../components/SupplierList'
import SupplierForm from '../components/SupplierForm'
import { getSuppliers, updateSupplier, createSupplier, deleteSupplier } from '../services/Supplier'

const Suppliers = ({ signedUser, supplier }) => {
    const [suppliers, setSuppliers] = useState([])
    const [createdSupplier, setCreatedSupplier] = useState(null)
    const [selectedSupplier, setSelectedSupplier] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [formError, setFormError] = useState('')

    const navigate = useNavigate()


    useEffect(() => {
        const fetchSuppliers = async () => {
        try {
            const data = await getSuppliers()
            setSuppliers(data)

        } catch (error) {
            console.error('Failed to fetch suppliers:', error)
        }}
        fetchSuppliers()
    }, [suppliers])


    const handleCreate = async (supplierData) => {
        try {
            const newSupplier = await createSupplier({ ...supplierData })
            setSuppliers([...suppliers, newSupplier])
            setShowForm(false)
            setCreatedSupplier( { name: '', address: '', phone: '', fax: '', email: '', created_by: `${user._id}`})
            setFormError('')

        } catch (error) {
            const message = error?.response?.data?.message || 'Failed to create user.'
            setFormError(message)
            console.error('Failed to create supplier:', error)
        }
    }

    const handleEdit = async (supplierData) => {
        try {
            const updatedSupplier = await updateSupplier(selectedSupplier._id, supplierData)
            setSuppliers(suppliers.map(supplier => supplier._id === selectedSupplier._id ? updatedSupplier : supplier))
            setSelectedSupplier(null)

        } catch (error) {
            console.error('Failed to update supplier:', error)
        }
    }


    const handleDelete = async (supplierId) => {
        try {
            await deleteSupplier(supplierId)
            setSupplier(suppliers.filter(supplier => supplier._id !== supplierId))

        } catch (error) {
            console.error('Failed to delete supplier:', error)
        }
    }




    return (
        <div className="suppliers-css">
            <h1>Suppliers Management</h1>
            <button onClick = {() => { setShowForm(!showForm); setFormError('') }}>
                {showForm ? 'Cancel' : 'Add New Supplier'}
            </button>
            {showForm && (
                <>
                    <SupplierForm
                        onSubmit = {handleCreate}
                        onCancel = {() => setShowForm(false)}
                        error = {formError}
                        suppliers = {suppliers}
                    />
        
                </>
            )}
            <SupplierList suppliers = {suppliers} setSelectedSupplier={setSelectedSupplier} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    )
}

export default Suppliers