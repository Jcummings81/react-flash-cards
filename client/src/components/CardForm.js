import React from 'react';

class CardForm extends React.Component {
  state = { front: '', back: '' }

  handleFront = (e) => {
    this.setState({ front: e.target.value });
  }

  handleBack = (e) => {
    this.setState({ back: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.front);
    this.props.addCard(this.state.back);
    this.setState({ front: '' })
    this.setState({ back: '' })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
    
        <input
          placeholder="Add Front"
          required
          value={this.state.front}
          onChange={this.handleFront}
        />
     

      </form>
      <form onSubmit={this.handleSubmit}>
         <input
         placeholder="Add Back"
         required
         value={this.state.back}
         onChange={this.handleBack}
       />
      </form>
         </div>
    )
  }
}

export default CardForm;