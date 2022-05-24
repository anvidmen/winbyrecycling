import axios from 'axios'

const baseURL = "https://gana-reciclando.herokuapp.com"

export const login = data => axios.post(`${baseURL}/login`, data)
export const register = data => axios.post(`${baseURL}/register`, data)