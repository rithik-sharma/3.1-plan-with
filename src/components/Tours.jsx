import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
    return (
        <div className='container'>
            <h1 className='title'>Plan With Me!!</h1>
            <div className='cards'>
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