import './App.css';
import  Navbar from './Components/Navbar'
import  Sidebar from './Components/Navbar/Sidebar'
import Social from './Components/Social/Social'
import {BrowserRouter as Router} from 'react-router-dom';

const App=(() =>
    <>
        <Router>
            <Sidebar />
            <Navbar class="nav" />
            <div class="back"/>
        </Router>
        <Social />

    </>
    
);

export default App;
