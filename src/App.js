import './App.css';
import './loading.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import $ from 'jquery'
import React, {useState, useEffect} from 'react';



$("#message").delay(1000).fadeOut();

const App=() => {

    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#50E3C2");
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 8000)
    }, [])

    return(
        <>
        {
            loading ?  (<div class="loadingContainer"><div class="loader">
             <span id="message">Please wait..</span>
          </div></div>):(
        
            <Router> 
                <Home />
            </Router>
            )
        }
        </>
    )
        
}

export default App;
