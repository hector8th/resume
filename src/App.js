import React, {Component} from 'react'
import './App.css';
import Background from './components/Background.js';
import Header from './components/Header.js';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Header />
            <Background />
          </div>
        );
    }
}
export default App;
