// import './App.css';
import Social from './Components/Social/Social'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
const App=(() =>
    <>
        <Router> 
            <Home />
        </Router>

    </>
    
);

export default App;
