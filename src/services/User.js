import Client from './api'



export const createUser = async (data) => {
    try {
        const response = await Client.post('/user/create', data)
        return response.data

    } catch (error) {
        console.log('Error creating user:', error)
        throw error
    }   
}


export const loginUser = async (data) => {
    try {
        const response = await Client.post('/user/login', data)
        localStorage.setItem('token', response.data.token) // Store token in localStorage
        return response.data.user

    } catch (error) {
        console.log('Error logging in user:', error)
        throw error
    }
}


export const getUsers = async () => {
    try {
        const response = await Client.get(`/user/users`)
        return response.data

    } catch (error) {
        console.log('Error fetching users:', error)
        throw error
    }
}   


export const updateUser = async (id, data) => {
    try {
        const token = localStorage.getItem('token')
        const response = await Client.put(`/user/users/edit`, {id, data}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.data.token) {
            localStorage.setItem('token', response.data.token)
        }
        console.log(response.data.user)
        return response.data.user

    } catch (error) {
        console.log('Error updating user:', error)
        throw error
    }
}


export const resetUser = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const response = await Client.post(`/user/reset-password`, id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.data.token) {
            localStorage.setItem('token', response.data.token)
        }
        console.log(response.data.user)
        return response.data.user

    } catch (error) {
        console.log('Error resetting password:', error)
        throw error
    }
}


export const updateState = async (id, data) => {
    try {
        const token = localStorage.getItem('token')
        const response = await Client.patch(`/user/activate-deactivate`, {id, data}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.data.token) {
            localStorage.setItem('token', response.data.token)
        }
        console.log(response.data.user)
        return response.data.user

    } catch (error) {
        console.log('Error updating user:', error)
        throw error
    }
}


export const deleteUser = async (id) => {
    try {
        const response = await Client.delete(`/user/users/${id}`)
        return response.data

    } catch (error) {
        console.log('Error deleting user:', error)
        throw error
    }
}


export const CheckSession = async () => {
    try {
        const response = await Client.get('/user/session')
        return response.data.user

    } catch (error) {
        console.log('Error checking session:', error)
        return null
    }
}