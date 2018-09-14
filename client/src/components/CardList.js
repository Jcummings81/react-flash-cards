import React from 'react';
import Card from './Card';

const CardList = ({ cards, updateCard, deleteCard }) => (
  <div className="row">
    { cards.map( card => 
        <Card
          key={card.id}
          {...card}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      )
    }
  </div>
)

export default CardList;