import Client from "./api"


export const GetProducts = async () => {
    try {
        const response = await Client.get('/product')
        return response.data

    } catch (error) {
        console.error('Error fetching products:', error.message)
        throw error
    }
}

export const CreateProduct = async (productData) => {
    try {
        const response = await Client.post('/product', productData,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        return response.data 

    } catch (error) {
        console.error('Error Creating Product:', error)
        throw error
    }
}

export const UpdateProduct = async (id) => {

}

export const DeleteProduct = async () => {

}