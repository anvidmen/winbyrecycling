import { login } from 'api'
import { auth } from 'utils/storage';

const getParamsEncoded = params => Object.keys(params)
  .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  .join('&');

const headers = {
  "Content-Type": "application/x-www-form-urlencoded"
}

const loginUser = async (username, password) => {
  const data = { username: username, password: password }
  try {
    const response = await login(getParamsEncoded(data), { headers })
    auth(response.data)
    return response.data
  } catch (error) {
    const { response: { data: { message } } } = error
    throw new Error(message)
  }
}

export default loginUser