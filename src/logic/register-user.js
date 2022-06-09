import { register } from 'api'

const registerUser = async (username, password) => {  
  const data = { username: username, password: password }
  try {
    const response = await register(data)
    return response.data
  } catch (error) {
    const { response: { data: { message } } } = error
    throw new Error(message)
  }
}

export default registerUser
