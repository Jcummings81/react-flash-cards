import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Card = ({ id,  front, back, updateCard, deleteCard }) => (
  <div className="col s12">
    <div className="col m8">
      <div className="center">
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        onClick={() => updateCard(id)}
      />
      <label htmlFor={`card-${id}`}>Card</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteCard(id)}>
      Delete?
    </div>
  </div>
)

export default Card;