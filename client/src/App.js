import React, { Component } from 'react';
import CardForm from './components/CardForm'
import CardList from './components/CardList'

class App extends Component {

  state = { cars: [] }

    componentDidMount() {
      fetch('/api/cards')
        .then( res => res.json() )
        .then( cards => this.setState({ cards }) )  
      }

  addCard = (front, back) => {
    //TODO make api call to rails server to add item
  const { cards } = this.state;
  //Generate random id
  const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
  this.setState({ cards: [...cards, { id, front, back }] });

  }

  updateCard = (id) => {
    fetch(`/api/cards/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( card => {
        const cards = this.state.cards.map( t => {
          if (t.id === id)
            return card
          return t;
      });
  
      this.setState({ cards });
    })
  }

  deleteCard = (id) => {
 //TODO make api call to delete todo
 fetch(`/api/cards/${id}`, { method: 'DELETE' })
    .then( () => {
 const { cards } = this.state;
 this.setState({ cards: cards.filter( t => t.id !== id ) })
    })
  }


  render() {
    return (
      <div className="container" >
         <CardForm addCard={this.addCard} />
        <CardList
          cards={this.state.cards}
          updateCard={this.updateCard}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
