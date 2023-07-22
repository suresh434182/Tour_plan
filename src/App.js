import React from "react";
import { useState } from 'react';
import data from './data';
import Tours from './Components/Tours';
  
const App = () => {

  const[tours, setTours]=useState(data);
  
  function removeTour(id)
  {
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }
  if(tours.length===0)
  {
return(
    <div className="refresh">
        <h2 >
            No tour Left
        </h2>
        <button onClick={()=>setTours(data)} className="btn-whit">Refresh</button>
    </div>
);
}

  return (
    <div> 
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
