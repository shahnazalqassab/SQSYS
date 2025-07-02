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
        return response.data

    } catch (error) {
        console.log('Error logging in user:', error)
        throw error
    }
}



export const CheckSession = async () => {
    try {
        const response = await Client.get('/user/session')
        return response.data

    } catch (error) {
        console.log('Error checking session:', error)
        throw error
    }
}