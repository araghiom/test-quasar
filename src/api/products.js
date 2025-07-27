import apiClient from './config'

export const productsApi = {
  async getProducts(limit = 12) {
    try {
      const response = await apiClient.get('/posts')
      return response.data.slice(0, limit)
    } catch (error) {
      throw new Error('Failed to fetch products')
    }
  },

  async getProductById(id) {
    try {
      const response = await apiClient.get(`/posts/${id}`)
      return response.data
    } catch (error) {
      throw new Error('Failed to fetch product')
    }
  },

  async getProductComments(id) {
    try {
      const response = await apiClient.get(`/posts/${id}/comments`)
      return response.data
    } catch (error) {
      throw new Error('Failed to fetch product comments')
    }
  }
} 