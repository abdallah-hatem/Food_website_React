import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className='container' id='ABOUT-US'>
            <div className='details'>
                <h1>We make everything by<br /> hand with the best possible <br /> ingredients.</h1>
                <p id='desc'>
                    Lorem ipsum dolor sit amet,Curabitur in sagittis lorem.Lorem ipsum dolor sit amet,Curabitur in sagittis lorem.Lorem ipsum dolor sit amet,Curabitur in sagittis lorem. Nam non porta enim. Donec ut turpis in nunc placerat pellentesque. Maecenas et magna a diam varius luctus.
                </p>
                <br />

                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet,Curabitur.</p>
                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet,Curabitur.</p>
                <p id='last'><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet,Curabitur.</p>

                <button>Learn More</button>
            </div>
            <div className='images'>
                <img id='f' src='https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoeSUyMGZvb2QlMjB3aGl0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'></img>
                <img id='s' src='https://media.istockphoto.com/photos/food-with-high-content-of-omega3-fats-picture-id1301412050?b=1&k=20&m=1301412050&s=170667a&w=0&h=nViB9ZIwyVRLPD5s123i48XNq_MNUvdBtX3IzAHnqec='></img>
                <img id='th' src='https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
                <img id='fo' src='https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aHklMjBmb29kJTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
            </div>
        </div>
    )
}

export default AboutUs