import Client from './api'


export const getUsers = async (id) => {
    try {
        const response = await Client.get(`/category`)
        return response.data

    } catch (error) {
        console.log('Error fetching categories:', error)
        throw error
    }
}   

// export const createCategory = async (data) => {
//     const token = localStorage.getItem('token')
//     // console.log(token)
//     try {
//         const response = await Client.post('/user/create', data)
//         return response.data

//     } catch (error) {
//         console.log('Error creating user:', error)
//         throw error
//     }   
// }


// export const loginUser = async (data) => {
//     try {
//         const response = await Client.post('/user/login', data)
//         // console.log(response)
//         localStorage.setItem('token', response.data.token) // Store token in localStorage
//         // console.log(localStorage.token)
//         return response.data

//     } catch (error) {
//         console.log('Error logging in user:', error)
//         throw error
//     }
// }





// export const updateUser = async (id, data) => {
//     try {
//         const response = await Client.put(`/user/users/edit`, {id, data})
//         if (response.data.token) {
//             localStorage.setItem('token', response.data.token)
//         }
//         console.log(response.data.user)
//         return response.data.user

//     } catch (error) {
//         console.log('Error updating user:', error)
//         throw error
//     }
// }


// export const resetUser = async (id) => {
//     try {
//         const response = await Client.post(`/user/reset-password`, id)
//         if (response.data.token) {
//             localStorage.setItem('token', response.data.token)
//         }
//         console.log(response.data.user)
//         return response.data.user

//     } catch (error) {
//         console.log('Error resetting password:', error)
//         throw error
//     }
// }


// export const updateState = async (id, data) => {
//     try {
//         const response = await Client.patch(`/user/activate-deactivate`, {id, data })
//         if (response.data.token) {
//             localStorage.setItem('token', response.data.token)
//         }
//         console.log(response.data.user)
//         return response.data.user

//     } catch (error) {
//         console.log('Error updating user:', error)
//         throw error
//     }
// }


// export const deleteUser = async (signedUser, deletedUser) => {
//     console.log('Deleting user:', deletedUser)
//     console.log('Signed user:', signedUser)

//     try {
//         const response = await Client.delete(`/user/${signedUser.id}/users/${deletedUser._id}`, deletedUser)
//         return response.data

//     } catch (error) {
//         console.log('Error deleting user:', error)
//         throw error
//     }
// }