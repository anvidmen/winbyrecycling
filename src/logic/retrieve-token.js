const retrieveToken = () => {
    try {
      return JSON.parse(localStorage.getItem('token'))
    } catch (e) {
      return null
    }
  }
  
  export default retrieveToken