import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const UserList = ({ users, onEdit, onDelete, setSelectedUser, onReset }) => {
    const navigate = useNavigate()
    console.log('Users:', users)
    const [editId, setEditId] = useState(null)
    const [editValues, setEditValues] = useState(null)  
    const [localUsers, setLocalUsers] = useState(users)

    useEffect(() => {
        setLocalUsers(users)
    }, [users])

    const handleEditClick = (user) => {
        setEditId(user._id)
        setEditValues({
        name: user.name,
        email: user.email
    })
}

    const handleEditChange = (event) => {
        setEditValues({ ...editValues, [event.target.name]: event.target.value })
    }

    const handleEditSave = (user) => {
    onEdit({ ...user, ...editValues })
    setEditId(null)
    setEditValues({})
    }

    const handleEditCancel = () => {
    setEditId(null)
    setEditValues({})
    }

    return (
        <div className = "user-list">
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>     
                    {users.map((user) => (
                        <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>
                            {editId === user._id ? (
                            <input name="name" value={editValues.name} onChange={handleEditChange} />
                            ) : ( user.name )}
                        </td>
                        <td>
                            {editId === user._id ? (
                            <input name="email" value={editValues.email} onChange={handleEditChange} />
                            ) : ( user.email )}
                        </td>
                        <td>{user.user_role}</td>
                        <td>{user.status}</td>
                        <td>
                            {editId === user._id ? (
                            <>
                                <button onClick={() => handleEditSave(user)}>Save</button>
                                <button onClick={handleEditCancel}>Cancel</button>
                            </>
                            ) : (
                            <>
                                <button onClick={() => onReset(user)}>Reset</button>
                                <button onClick={() => { setSelectedUser(user); handleEditClick(user); }}>Edit</button>                                <button onClick={() => onState(user)}>Activate/Deactivate</button>
                                {/* Example: Only show delete for other users */}
                                {user && user._id !== user._id && (
                                <button onClick={() => onDelete(user._id)}>Delete</button>
                                )}
                            </>
                            )}
                        </td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}

export default UserList