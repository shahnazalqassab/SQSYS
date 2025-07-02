import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const UserList = ({ users, user, onEdit, onDelete, onView }) => {
    const navigate = useNavigate()
    console.log('Users:', users)

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
                    </tr>
                </thead>
                <tbody>     
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                <button onClick={() => onView(user)}>View</button>
                                <button onClick={() => onEdit(user)}>Edit</button>

                                {user.id !== user.id && (
                                    <>
                                        <button onClick={() => onDelete(user.id)}>Delete</button>
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