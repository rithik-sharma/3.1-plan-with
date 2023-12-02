import React from 'react';
import './tours.css';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
    return (
        <div>
            <h1>Plan With Me!!</h1>
            <div>
                {
                    tours.map((tour) => {
                        return <Card {...tour} removeTour={removeTour} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours