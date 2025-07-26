import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserList from '../components/UserList'
import UserForm from '../components/UserForm'
import { getUsers, updateUser, createUser, resetUser, deleteUser, updateState } from '../services/User'

const Users = ({ signedUser }) => {
    const [users, setUsers] = useState([])
    const [createdUser, setCreatedUser] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [formError, setFormError] = useState('')

    const navigate = useNavigate()


    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const data = await getUsers(signedUser.id)
            setUsers(data)

        } catch (error) {
            console.error('Failed to fetch users:', error)
        }}
        fetchUsers()
    }, [])


    const handleCreate = async (userData) => {
        try {
            const newUser = await createUser({ ...userData, signedUser })
            console.log(newUser)
            setUsers([...users, newUser.user])
            setShowForm(false)
            // setCreatedUser( { name: '', email: '', username: '', password: '', user_role: '', status: ''})
            setFormError('')

        } catch (error) {
            const message = error?.response?.data?.message || 'Failed to create user.'
            setFormError(message)
            console.error('Failed to create user:', error)
        }
    }

    const handleEdit = async (userData) => {
        try {
            const updatedUser = await updateUser(userData._id, userData)
            
            setUsers(users.map(user => user._id === updateUser._id ? updatedUser : user))
            setSelectedUser(null)

        } catch (error) {
            console.error('Failed to update user:', error)
        }
    }

    const handleDelete = async (userPassed) => {
        console.log(userPassed)
        try {
            await deleteUser(signedUser, userPassed)
            setUsers(users.filter(user => user._id !== userPassed._id))

        } catch (error) {
            console.error('Failed to delete user:', error)
        }
    }


    const handleReset = async (user) => {
        try {
            const reset = await resetUser(user._id)

            setUsers(users.map(u => u._id === user._id ? reset : u))

        } catch (error) {
            console.error('Failed to reset user:', error)
        }
    }

    const handleState = async (user) => {
        try {
            const updatedUser = await updateState(user._id, { status: user.status === 'active' ? 'inactive' : 'active' })
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
            <UserList signedUser = {signedUser} users = {users} setSelectedUser={setSelectedUser} onEdit={handleEdit} onReset={handleReset} onDelete={handleDelete} onState={handleState} />
        </div>
    )
}

export default Users