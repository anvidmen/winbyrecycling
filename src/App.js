import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppContext } from 'providers/AppProvider'
import { decodeToken } from "react-jwt"
import retrieveToken from 'logic/retrieve-token'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Games from 'pages/Games/Games'
import Contact from 'pages/Contact/Contact'
import Login from 'pages/Login/Login'
import Register from 'pages/Register/Register'

const App = () => {
  const [user, setUser] = useContext(AppContext)

  const handleToken = token => {
    const accessToken = token?.access_token;
    if(accessToken){
      const tokenInfo = decodeToken(accessToken)
      const {sub: username} = tokenInfo
      setUser(username)
    }
    return accessToken
  }

  useEffect(() => {
    const retrievedToken = retrieveToken()
    const accessToken = retrievedToken?.access_token;

    if (accessToken) {
      const tokenInfo = decodeToken(accessToken)
      const {sub: username} = tokenInfo
      setUser(username)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/about' caseSensitive={false} element={<About />} />
        <Route path='/games' caseSensitive={false} element={<Games />} />
        <Route path='/contact' caseSensitive={false} element={<Contact />} />
        <Route path='/login' caseSensitive={false} element={<Login handleToken={handleToken} />} />
        <Route path='/register' caseSensitive={false} element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
