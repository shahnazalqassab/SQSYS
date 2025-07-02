import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserList from '../components/UserList'
import UserForm from '../components/UserForm'
import UserEdit from '../components/UserEdit'

import { getUsers } from '../services/User'

const Users = ({ user }) => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const data = await getUsers()
            setUsers(data)

        } catch (error) {
            console.error('Failed to fetch users:', error)
        }}
        fetchUsers()
    }, [])


    const handleCreate = async (userData) => {
        try {
            const newUser = await createUser({ ...userData, enteredBy: user.id })
            setUsers([...users, newUser])
            setShowForm(false)

        } catch (error) {
            console.error('Failed to create user:', error)
        }
    }


    return (
        <div className="users-css">
            <h1>User Management</h1>
            <UserList users={users} setSelectedUser={setSelectedUser} />
        </div>
    )
}

export default Users