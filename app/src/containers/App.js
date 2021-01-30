import '../App.css';
import React from 'react';
import Algos from '../components/Algorithms'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "username": "user"
    };
    // this.changeState = this.changeState.bind(this);
  }

  changeState = () => {
    this.setState({
      "username": "Albin"
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.username}
        <button className="" onClick={this.changeState}>Change state</button>
        <Algos myProp={this.state.username}/>
      </div>
    );
  }
}
