import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Card from './card';
import CardList from './cardList';
import CardForm from './card-form';
import './index.css';

interface AppProps {}
interface AppState {
  name: string;
  profiles: any;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: 'React',
      profiles: []
    };
  }

  componentDidMount() {
    ['jitendra19','gaearon', 'Timer', 'iansu', 'ianschmitz'].forEach((name)=>{
      this.addUsername(name);
    });
  }

  addUsername = async (username: any) => {
    console.log(username, 'is added.');
    const userdata = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(userdata.data);
    this.setState(prestate => ({
      profiles: [...prestate.profiles, userdata.data]
    }));
  };
  render() {
    return (
      <div>
        <h1>Github Cards App</h1>
        <CardForm addUsername={this.addUsername} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
