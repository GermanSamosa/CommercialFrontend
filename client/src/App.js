import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
      
      <h1>Hello</h1>
    </>
  );
}

export default App;
