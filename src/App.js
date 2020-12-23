import './App.css';
import  Navbar from './Components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';

const App=(() =>
    <Router>
      <Navbar class="nav" />
      <div class="new">
      <img src="newImage.png" style = {{width: '100%'}} />
      </div>
    </Router>
);

export default App;
