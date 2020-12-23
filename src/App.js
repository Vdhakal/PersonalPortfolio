import './App.css';
import  Navbar from './Components/Navbar'
import Social from './Components/Social/Social'
import {BrowserRouter as Router} from 'react-router-dom';

const App=(() =>
    <>
        <Router>
            <Navbar class="nav" />
            <div class="back"/>
        </Router>
        <Social />

    </>
    
);

export default App;
