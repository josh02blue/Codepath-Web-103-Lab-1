import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [event, setEvent] = useState({id: 0, name: "", pricepoint: "", audience: "", image: ""})

    useEffect(() => {
        setEvent({id: props.id, name: props.name, pricepoint: props.pricepoint, audience: props.audience, image: props.image});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${event.image})`}}></div>
            <div className='bottom-container'>
                <h3>{event.name}</h3>
                <p>{'Price: ' + event.pricepoint}</p>
                <p>{'Great For: ' + event.audience}</p>
                <Link to={'/event/' + event.id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Card