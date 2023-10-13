import React, {Component} from 'react'
import './App.css';
import Background from './components/Background.js';
import Header from './components/Header.js';

// cd C:\Users\iH3X\Desktop\CODING\GitHub\resume\resume-app

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
