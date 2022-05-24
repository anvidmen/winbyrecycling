import { login } from 'api'

const loginUser = async (username, password) => {  
  const data = { username: username, password: password }
  try {
    const response = await login(data)

    return  response.data
  } catch (error) {
    const { response: { data: { message } } } = error
    throw new Error(message)
  }
}

export default loginUser