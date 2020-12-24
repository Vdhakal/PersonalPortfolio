import React, {useState} from 'react';
import BackgroundSection from '../Components/Background';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Navbar/Sidebar'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            {/* <BackgroundSection /> */}
        </div>
    )
}

export default Home
