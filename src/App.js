import './App.css';
import './loading.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import $ from 'jquery'
import React, { useState, useEffect } from 'react';

$(document).ready(function () {
    function nextMsg() {
        $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
        $('.menu i').click(function () {
            $('.menu a i').toggleClass('hidden show');
        })
    };

    var messages = [
        "Please wait...",
        "Giving it a few touches.."
    ].reverse();

    $('#message').hide();
    nextMsg();
})
const App = () => {

    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#50E3C2");
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
        <>
            {
                loading ? (<div class="loadingContainer"><div class="loader">
                    <span id="message">Please Wait...</span>
                </div></div>) : (

                    <Router>
                        <Home />
                    </Router>
                )
            }
        </>
    )

}

export default App;
