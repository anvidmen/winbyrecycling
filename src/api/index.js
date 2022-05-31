import axios from 'axios'

const baseURL = "http://localhost:8080"

export const login = data => axios.post(`${baseURL}/login`, data)
export const register = data => axios.post(`${baseURL}/user`, data)