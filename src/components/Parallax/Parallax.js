import React from 'react'
import './Parallax.css'

function Parallax() {
    return (
        <>
            <div className='parallax'>
                <div className='text'>
                    <h1>Baked fresh daily by bakers with passion.</h1>
                    <button>Learn More</button>
                </div>
            </div>

            <div className='newsletter'>
                <h1>Hurry up! Subscribe to our newsletter and get 25% Off</h1>
                <p>Limited time offer for this month. No credit card required.</p>
                <div className='email'>
                    <input placeholder='Email address here'></input>
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Parallax