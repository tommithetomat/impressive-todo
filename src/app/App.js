import './App.css';
import { Component } from 'react';
import '../wrapper/wrapper.scss';
import Background from '../back/Back';
import Wrapper from '../wrapper/Wrapper';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Background/>
        <Wrapper/>
      </div>
    );
  }
}

export default App;
