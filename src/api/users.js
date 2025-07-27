import apiClient from './config'

export const usersApi = {
  async getUsers() {
    try {
      const response = await apiClient.get('/users')
      return response.data
    } catch (error) {
      throw new Error('Failed to fetch users')
    }
  },

  async getUserById(id) {
    try {
      const response = await apiClient.get(`/users/${id}`)
      return response.data
    } catch (error) {
      throw new Error('Failed to fetch user')
    }
  }
} 