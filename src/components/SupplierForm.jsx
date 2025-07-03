import { useState, useEffect } from 'react'


const SupplierForm = ({ onSubmit, error, suppliers = [] }) => {
    const [form, setForm] = useState({
        name: '',
        address: '',
        phone: '',
        fax: '',
        email: ''
    })

    const [nameExists, setNameExists] = useState(false)

    useEffect(() => {
        if (form.name && suppliers.length > 0) {
            setNameExists(suppliers.some(supplier => supplier.name === form.name))
        } else {
            setNameExists(false)
        }
    }, [form.name, suppliers])


    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        if (nameExists)
            return

        onSubmit(form)
        setForm({
            name: '',
            address: '',
            phone: '',
            fax: '',
            email: ''
        })
    }

    return (
        <form className = "supplier-form" onSubmit = {handleSubmit}>
            <input type = "text" name = "name" placeholder = "name" value = {form.name} onChange = {handleChange}
            required
            />
            <input type = "text" name = "address" placeholder = "address" value = {form.address} onChange = {handleChange}
            required
            />
            <input type = "text" name = "phone" placeholder = "phone" value = {form.phone} onChange = {handleChange}
            required
            />
            <input type = "text" name = "fax" placeholder = "fax" value = {form.fax} onChange = {handleChange}
            required
            />
            <input type = "text" name = "email" placeholder = "email" value = {form.email} onChange = {handleChange}
            required
            />

            <button type = "submit">Create</button>

            {( error || nameExists) && (
                <div className = "form-error">
                    { error && <div>{error}</div>}
                    {nameExists && <div>Supplier already exists.</div>}
                </div>
            )}
        </form>
    )
}



export default SupplierForm