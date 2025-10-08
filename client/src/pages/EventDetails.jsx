import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './EventDetails.css'

const EventDetails = ({data}) => {

    const [event, setEvent] = useState({id: 0, name: "", pricepoint: "", audience: "", image: "", description: "", submittedby: "", submittedon: ""})

    const { id } = useParams()


    useEffect(() => {

        const fetchEventById = async () => {
        const response = await fetch(`http://localhost:3001/events/${id}`)
        const data = await response.json()
        setEvent(data)
}

    fetchEventById()

    }, [data, id]);


    return (
        <div className="EventDetails">
            <main id="event-content" class="event-info">
                <div class="image-container">
                    <img id="image" src={event.image} />
                </div>
                <div class="event-details">
                    <h2 id="name">{event.name}</h2>
                    <p id="submittedBy">{'Submitted By: ' + event.submittedby}</p>
                    <p id="pricePoint">{'Price: ' + event.pricepoint}</p>
                    <p id="audience">{'Great For: ' + event.audience}</p>
                    <p id="description">{event.description}</p>
                </div>
            </main>
        </div>
    )
}

export default EventDetails