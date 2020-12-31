import React, {useState} from 'react';
import '../App.css'
import BackgroundSection from '../Components/Background';
import Social from '../Components/Social/Social'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Navbar/Sidebar'
import About from '../Components/About'
import Project from '../Components/Projects'
import Work from '../Components/Work'
import Skills from '../Components/Skills'


const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <BackgroundSection />  
            <Social />
            <About />
            <Project />
            <Work />
            <Skills />
        </div>
    )
}

export default Home
