import React, {useState} from 'react';
import BackgroundSection from '../Components/Background';
import Social from '../Components/Social/Social'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Navbar/Sidebar'
import backgroundImage from './thor.png';

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
            <div class="back" /> 
            <Social />
        </div>
    )
}

export default Home
