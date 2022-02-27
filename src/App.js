import './App.css';
import Navbar from "./Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Example from "./Example";
import Home from './Home';
import About from './About'
import Join from "./Join";
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Example" component={Example} />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Join" component={Join} />
        </Routes>
      </Router>
  );
}
export default App;