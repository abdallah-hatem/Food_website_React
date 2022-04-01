import React from 'react'
import './Home.css'

import Parallax from '../Parallax/Parallax';
import Reviews from '../Reviews/Reviews';
import Slang from '../Slang/Slang';
import Menu from '../Menu/Menu';
import AboutUs from '../AboutUs/AboutUs';
import Card from '../Card/Card';

function Home() {
    return (
        <>
            <div className='home' id='HOME'>
                {/* <img src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img> */}
                {/* <img src='https://img.freepik.com/free-photo/fresh-organic-bunch-carrots-gray-kitchen-top-aerial-view_53876-146280.jpg?size=626&ext=jpg&ga=GA1.2.1791332429.1647479796'></img> */}
                {/* <img src='https://img.freepik.com/free-photo/batch-cooking-assortment-with-copy-space_23-2148765599.jpg?size=626&ext=jpg&ga=GA1.2.1791332429.1647479796'></img> */}
                <img src='https://img.freepik.com/free-photo/oatmeal-dryfruits-with-bird-paradise-flower-white-background_23-2147906999.jpg?size=626&ext=jpg&ga=GA1.2.1791332429.1647479796'></img>
                {/* <img src='https://img.freepik.com/free-photo/pots-vegetables-harvest_23-2147694057.jpg?size=626&ext=jpg&ga=GA1.2.1791332429.1647479796'></img> */}
                <div className='header'>
                    <h1>Good food choices<br /> are good <br /> invesments.</h1>
                    <p>
                        Lorem ipsum dolor sit amet,Curabitur in sagittis lorem. Nam non porta enim. Donec ut turpis in nunc placerat pellentesque. Maecenas et magna a diam varius luctus.
                    </p>
                    <button id='order-now'>Order Now</button>
                    <button id='learn-more'>Learn More</button>
                </div>

            </div>
            <Card />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Card isInverted={true} />
            <Slang />
            <AboutUs />
            <Menu />
            <Reviews />
            <Parallax />
        </>
    )
}

export default Home