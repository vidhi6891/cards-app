import React, { useState } from 'react';
import AddCard from './AddCard';
import Card from './Card';
import { dataJSON } from './data';

const App = () => {
  const [data, setData] = useState(dataJSON);

  const addCard = (cardDetails) => {
    setData([...data, cardDetails]) ;
  }

  const onEditDetails = (newObj) => {
    const index = data.findIndex(card => card.id === newObj.id);
    const updatedData = [...data];
    updatedData.splice(index, 1, newObj);
    setData(updatedData);
  };
    
  return (
    <div>
      <AddCard  addCard={addCard} data={data}/>
      <div className="container">
          {data.map((card) => (
            <Card key={card.id} cardDetails={card} onEditDetails={onEditDetails}/>
          ))}
      </div>
    </div>
  )
}

export default App;