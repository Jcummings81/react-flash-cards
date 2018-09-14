import React from 'react';

class CardForm extends React.Component {
  state = { front: '', back: '' }

  handleChange = (e) => {
    this.setState({ front: e.target.value, back: e.target.value });
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
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Card"
          required
          value={this.state.front}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default CardForm;