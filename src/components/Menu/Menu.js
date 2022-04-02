import React from 'react'
import './Menu.css'

function Menu({ darkMode }) {
    return (
        <div className='menu' id='EXPLORE'>
            <div className='menu-header'>
                <h1>Explore Our Foods</h1>
                <p>
                    Lorem ipsum dolor sit amet,Curabitur in sagittis lorem.Nam non porta enim.Curabitur in sagittis lorem.Nam non porta enim.Curabitur in sagittis lorem.Nam non porta enim. Donec ut turpis in nunc placerat pellentesque. Maecenas et magna a diam varius luctus.
                </p>
            </div>
            <div className='items-container' >

                <div className='item'>
                    <img src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                    <div className='items-details'>
                        <p id={!darkMode ? 'name' : 'name_darkmode'}>Healthy Avocado Salad</p>
                        <p id='desc'>Lorem ipsum dolor sit amet, a diam varius luctus.</p>
                        <div className='pricing-cont'>
                            <button>Order Now</button>
                            <p id='price'>$15.99</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <img src='https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                    <div className='items-details'>
                        <p id='name'>Greek Smoked Salmon</p>
                        <p id='desc'>Lorem ipsum dolor sit amet, a diam varius luctus.</p>
                        <div className='pricing-cont'>
                            <button>Order Now</button>
                            <p id='price'>$20.99</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <img src='https://images.unsplash.com/photo-1455099229380-7b52707e356a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                    <div className='items-details'>
                        <p id='name'>Oats Fruit Salad</p>
                        <p id='desc'>Lorem ipsum dolor sit amet, a diam varius luctus.</p>
                        <div className='pricing-cont'>
                            <button>Order Now</button>
                            <p id='price'>$10.99</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu