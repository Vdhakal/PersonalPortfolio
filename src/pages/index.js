import React, {useState} from 'react';
import '../App.css'
import BackgroundSection from '../Components/Background';
import Social from '../Components/Social/Social'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Navbar/Sidebar'
<<<<<<< HEAD
import About from '../Components/About'
import Project from '../Components/Projects'
import Work from '../Components/Work'
import Skills from '../Components/Skills'
import Contact from '../Components/Contacts'


=======
import backgroundImage from './thor.png';
>>>>>>> a819fd1c1d8f7fde8ed15ca67be822f47aa06b60

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return (
        // <div style={{backgroundImage: "url(https://amymhaddad.s3.amazonaws.com/morocco-blue.png)"}}>
        <div style={{
                backgroundImage: "url(https://wallpaperaccess.com/full/19702.jpg)",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundColor: 'black'
                
                
            }}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <BackgroundSection />  
            <Social />
            <About />
            <Project />
            {/* <Work /> */}
            <Skills />
            <Contact/>
        </div>
    )
}

export default Home
