import React, { Component } from 'react';
import CardForm from './components/CardForm'
import Card from './components/Card'

class App extends Component {

  state = { cards: [] }

    componentDidMount() {
      fetch('/api/cards')
        .then( res => res.json() )
        .then( cards => this.setState({ cards: cards }) )  
      }

  addCard = (front, back) => {
    const card = { front, back }
    fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(card)
    }).then(res => res.json())
      .then(card => {
        const { cards } = this.state;
        this.setState({ cards: [...cards, card] })
      })
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
  
      this.setState({ cards: cards });
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
  cardList = () => {
    return this.state.cards.map(card => {
      return (
        <div className="row">
          <Card
            {...card}
            updateCard={this.updateCard}
            deleteCard={this.deleteCard}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <CardForm addCard={this.addCard} />
          {this.cardList()}
        </div>
      </div>
    );
  }
 
}

export default App;
