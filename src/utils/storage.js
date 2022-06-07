export const refresh = () => {
    window.location.reload()
  }
  
  export const auth = token => {
    return localStorage.setItem('token', JSON.stringify(token))
  }
  
  export const logout = () => {
    localStorage.clear()
    refresh()
  }