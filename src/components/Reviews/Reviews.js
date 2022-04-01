import { useState } from 'react'
import './Reviews.css'

function Reviews() {

    const [index, setIndex] = useState(0)


    const cards = [
        {
            img: 'https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k='
            ,
            comment: `"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."`
            ,
            title: 'John Doe - Web Designer'
        },
        {
            img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            ,
            comment: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet pellentesque arcu. Maecenas tempor velit et vehicula mattis. Vivamus id.."`
            ,
            title: 'Jane Doe - Web Developer'
        },
        {
            img: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            ,
            comment: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet pellentesque arcu. Maecenas tempor velit et vehicula mattis. Vivamus id.."`
            ,
            title: 'Jack white - Software Developer'
        },
    ]


    function slideRight() {
        setIndex(prev => (prev + 1) % cards.length)
    }

    function slideLeft() {
        index > 0 ? setIndex(prev => prev - 1) : setIndex(cards.length - 1)
    }




    return (
        <div className='reviews-container' id='REVIEWS'>
            <h1>Reviews</h1>
            <div className='reviews'>
                <img src={cards[index].img}></img>
                <p id='comment'>
                    {cards[index].comment}
                </p>
                <p id='title'>{cards[index].title}</p>
                <button id='left-arrow' onClick={slideLeft}><i className="fa-solid fa-angle-left"></i></button>
                <button id='right-arrow' onClick={slideRight}><i className="fa-solid fa-angle-right"></i></button>
               
                <div className='dots'>
                    {
                        cards.map(el =>
                            <button
                                onClick={() => setIndex(cards.indexOf(el))}
                                id={cards.indexOf(el) === index ? 'current' : 'dot'}>
                            </button>
                        )
                    }
                </div>
            
            </div>
        </div>
    )
}

export default Reviews