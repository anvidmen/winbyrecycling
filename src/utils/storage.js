export const refresh = () => {
    window.location.reload()
  }
  
  export const auth = user => {
    return localStorage.setItem('user', JSON.stringify(user))
  }
  
  export const logout = () => {
    localStorage.clear()
    refresh()
  }