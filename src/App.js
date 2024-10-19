// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
