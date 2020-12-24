import './App.css';
import Social from './Components/Social/Social'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

const App=(() =>
    <>
        <Router>
            <Home />
            <div class="back"/>
        </Router>
        <Social />

    </>
    
);

export default App;
