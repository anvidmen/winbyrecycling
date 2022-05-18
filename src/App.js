import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home';
import About from 'pages/About/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/about' caseSensitive={false} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
