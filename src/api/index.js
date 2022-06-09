import axios from 'axios'

const baseURL = "https://winbyrecycling.herokuapp.com"

export const login = data => axios.post(`${baseURL}/login`, data)
export const register = data => axios.post(`${baseURL}/user`, data)