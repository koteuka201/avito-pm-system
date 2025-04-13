import axios from "axios";

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
})

api.interceptors.request.use((config) => {
  const authToken=localStorage.getItem('token')
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})