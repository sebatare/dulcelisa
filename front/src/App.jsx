import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
//import {Provider} from 'react-redux'// Esto lo usare más adelante, no olvidar que el store se llama primero antes que todo
function App() {
  return (
    <Router>
      <Routes>
        <Route exactp path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
