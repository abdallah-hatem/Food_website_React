import { useState } from 'react'
import './Navbar.css'
import Link from 'react-scroll/modules/components/Link'


function Navbar({ darkMode, toggleDarkMode }) {

    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div className={!darkMode ? 'navbar sticky' : 'navbar sticky darkmode'}>
            <div className='logo'>Foods.</div>
            <div className={!clicked ? 'links' : 'links active'}>
                <Link id='link' to='HOME' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>Home</Link>
                <Link id='link' to='BLOG' spy={true} smooth={true} offset={-60} duration={500} onClick={handleClick}>Blog</Link>
                <Link id='link' to='ABOUT-US' spy={true} smooth={true} offset={-120} duration={500} onClick={handleClick}>About Us</Link>
                <Link id='link' to='EXPLORE' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick}>Explore Foods</Link>
                <Link id='link' to='REVIEWS' spy={true} smooth={true} offset={-110} duration={500} onClick={handleClick}>Reviews</Link>
                <button className='dark-btn' style={{ color: darkMode ? 'white' : '' }} onClick={toggleDarkMode}><i class="fa-solid fa-moon"></i></button>
                <button id='contact'>Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar