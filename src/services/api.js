import Axios from 'axios'

export const BASE_URL = 'http://localhost:3030'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token')
        
        if (token && token !== 'undefined' && token !== '') {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        // console.log('Request config:', config)
        return config
    },
    
    async (error) => {
        console.log({ message: 'Axios Interceptor Error!', error })
        throw error
    }
)

export default Client