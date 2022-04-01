import { React, useState } from 'react'
import './Card.css'

function Card({ isInverted }) {



    return (
        <div className='card'>


            {!isInverted ?
                <>
                    <div>

                        <img src='https://media.istockphoto.com/photos/anti-inflammanory-diet-food-picture-id1299079241?b=1&k=20&m=1299079241&s=170667a&w=0&h=NTQcUjNpjAXMCsuoBhd4E-oNEOHT7g0XXO-1h-n5TWg='></img>
                    </div>
                    <div className='details'>
                        <h1>We pride ourselvs on<br /> making real food from the<br /> best ingredients.</h1>
                        <p>
                            Lorem ipsum dolor sit amet,Curabitur in sagittis lorem. Nam non porta enim. Donec ut turpis in nunc placerat pellentesque. Maecenas et magna a diam varius luctus.
                        </p>
                        <button id='learn-more'>Learn More</button>
                    </div>
                </>
                :
                <>
                    <div className='details'>
                        <h1>We pride ourselvs on<br /> making real food from the<br /> best ingredients.</h1>
                        <p>
                            Lorem ipsum dolor sit amet,Curabitur in sagittis lorem. Nam non porta enim. Donec ut turpis in nunc placerat pellentesque. Maecenas et magna a diam varius luctus.
                        </p>
                        <button id='learn-more'>Learn More</button>
                    </div>
                    <div>

                        <img src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
                    </div>
                </>

            }
        </div>
    )
}

export default Card