import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SupplierList from '../components/SupplierList'
import SupplierForm from '../components/SupplierForm'
import { getSuppliers, updateSupplier, createSupplier } from '../services/Supplier'

const Suppliers = ({ user, supplier }) => {
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
    }, [users])


    const handleCreate = async (supplierData) => {
        try {
            const newSupplier = await createSupplier({ ...supplierData })
            setUsers([...suppliers, newSupplier])
            setShowForm(false)
            setCreatedSupplier( { name: '', address: '', phone: '', fax: '', email: '', created_by: ''})
            setFormError('')

        } catch (error) {
            const message = error?.response?.data?.message || 'Failed to create user.'
            setFormError(message)
            console.error('Failed to create user:', error)
        }
    }

    const handleEdit = async (userData) => {
        try {
            const updatedUser = await updateUser(selectedUser._id, userData)
            setUsers(users.map(user => user._id === selectedUser._id ? updatedUser : user))
            setSelectedUser(null)

        } catch (error) {
            console.error('Failed to update user:', error)
        }
    }


    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId)
            setUsers(users.filter(user => user._id !== userId))

        } catch (error) {
            console.error('Failed to delete user:', error)
        }
    }

    const handleReset = async (user) => {
        try {
            const resetUser = await resetUser(user._id)
            setUsers(users.map(u => u._id === user._id ? resetUser : u))

        } catch (error) {
            console.error('Failed to reset user:', error)
        }
    }

    const handleState = async (user) => {
        try {
            const updatedUser = await updateUser(user._id, { status: user.status === 'active' ? 'inactive' : 'active' })
            setUsers(users.map(u => u._id === user._id ? updatedUser : u))

        } catch (error) {
            console.error('Failed to update user state:', error)
        }
    }


    return (
        <div className="users-css">
            <h1>Users Management</h1>
            <button onClick = {() => { setShowForm(!showForm); setFormError('') }}>
                {showForm ? 'Cancel' : 'Add New User'}
            </button>
            {showForm && (
                <>
                    <UserForm
                        onSubmit = {handleCreate}
                        onCancel = {() => setShowForm(false)}
                        error = {formError}
                        users = {users}
                    />
        
                </>
            )}
            <UserList users = {users} setSelectedUser={setSelectedUser} onEdit={handleEdit} onDelete={handleDelete} onReset={handleReset} onState={handleState} />
        </div>
    )
}

export default Suppliers