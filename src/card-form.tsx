import React from 'react';

interface AppProps {
    addUsername: (username: string)=> {};
}
interface AppState {
    username: string;
}

export default class CardForm extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      username: ''
    };
  }
  // username = React.createRef();
  handleSubmit = (event: any) => {
    // console.log('this.username', this.username.current.value);
    // console.log('this.username', this.state.username);
    event.preventDefault();
    this.props.addUsername(this.state.username);
    this.setState({ username: '' });
  };
  render() {
    return (
      <form style={{ marginBottom: '2rem' }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          placeholder="enter github username"
          required
          onChange={event => this.setState({ username: event.target.value })}
          // ref={this.username}
        />
        <button>Add Card</button>
      </form>
    );
  }
}
