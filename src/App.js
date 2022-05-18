import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Games from 'pages/Games/Games'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/about' caseSensitive={false} element={<About />} />
        <Route path='/games' caseSensitive={false} element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
