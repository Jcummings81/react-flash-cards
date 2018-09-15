import React from 'react';


const Card = ({ id,  front, back, updateCard, deleteCard }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={front ? styles.back : {}} className="center">
        {front}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={back}
        onClick={() => updateCard(id)}
      />
      <span>Front?</span>
      <label htmlFor={`card-${id}`}>Card</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteCard(id)}>
      Delete?
    </div>
  </div>
)


const styles = {
  back: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

export default Card;