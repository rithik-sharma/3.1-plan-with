import React, { useState } from "react";
import Tours from './components/Tours';
import data from './data'



const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return <div>

    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  </div>;
};

export default App;
