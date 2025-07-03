import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const SupplierList = ({ suppliers = [], onEdit, onDelete, setSelectedSupplier }) => {
    const navigate = useNavigate()
    console.log('Suppliers:', suppliers)
    const [editId, setEditId] = useState(null)
    const [editValues, setEditValues] = useState(null)  
    const [localSuppliers, setLocalSuppliers] = useState(suppliers)

    useEffect(() => {
        setLocalSuppliers(suppliers)
    }, [])

    const handleEditClick = (supplier) => {
        setEditId(supplier._id)
        setEditValues({
        name: supplier.name,
        address: supplier.address,
        phone: supplier.phone,
        fax: supplier.fax,
        email: supplier.email
    })
}

    const handleEditChange = (event) => {
        setEditValues({ ...editValues, [event.target.name]: event.target.value })
    }

    const handleEditSave = (supplier) => {
    onEdit({ ...supplier, ...editValues })
    setEditId(null)
    setEditValues({})
    }

    const handleEditCancel = () => {
    setEditId(null)
    setEditValues({})
    }

    return (
        <div className = "supplier-list">
            <h2>Suppliers List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Fax</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>     
                    {suppliers.map((supplier) => (
                        <tr key={supplier._id}>
                        <td>{supplier.name}</td>
                        <td>
                            {editId === supplier._id ? (
                            <input name="name" value={editValues.name} onChange={handleEditChange} />
                            ) : ( supplier.name )}
                        </td>
                        <td>
                            {editId === supplier._id ? (
                            <input name="email" value={editValues.email} onChange={handleEditChange} />
                            ) : ( supplier.email )}
                        </td>
                        <td>{supplier.phone}</td>
                        <td>{supplier.fax}</td>
                        <td>
                            {editId === supplier._id ? (
                            <>
                                <button onClick={() => handleEditSave(supplier)}>Save</button>
                                <button onClick={handleEditCancel}>Cancel</button>
                            </>
                            ) : (
                            <>
                                <button onClick={() => { setSelectedSupplier(supplier); handleEditClick(supplier); }}>Edit</button>                       
                                <button onClick={() => onDelete(supplier._id)}>Delete</button>
                                
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

export default SupplierList