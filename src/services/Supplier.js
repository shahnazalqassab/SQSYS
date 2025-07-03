import Client from './api'



export const createSupplier = async (data) => {
    try {
        const response = await Client.post('/supplier/create', data)
        return response.data

    } catch (error) {
        console.log('Error creating supplier:', error)
        throw error
    }   
}


export const getSuppliers = async () => {
    try {
        const response = await Client.get('/user/:id/suppliers')
        return response.data.suppliers

    } catch (error) {
        console.log('Error fetching suppliers:', error)
        throw error
    }
}   

export const updateSupplier = async (id, data) => {
    try {
        const response = await Client.put(`/suppliers/${id}`, data)
        return response.data.user

    } catch (error) {
        console.log('Error updating supplier:', error)
        throw error
    }
}

export  const deleteSupplier = async (id) => {
    try {
        const request = await Client.delete(`/suppliers/${id}`)
        return response.data

    } catch (error) {
        console.error(`'Error deleting the supplier`)
        throw error
    }
}