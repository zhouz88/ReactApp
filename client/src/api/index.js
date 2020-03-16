import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9889/api/v1/',
})

export const insertProduct = (payload) => api.post(`/product`, payload/*, {headers: { Authorization: token}}*/)
export const getAllProducts = () => api.get(`/product`/*, {headers: { Authorization: token}}*/)
export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload/*, {headers: { Authorization: token}}*/)
export const deleteProductById = (id) => api.delete(`/product/${id}`/*, {headers: { Authorization: token}}*/)
export const getProductById = (id) => api.get(`/product/${id}`/*, {headers: { Authorization: token}}*/)

const apis = {
    insertProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById,
}

export default apis