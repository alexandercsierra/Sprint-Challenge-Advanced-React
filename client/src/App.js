import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import PlayersList from './components/PlayersList'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }//end constructor

  componentDidMount = () => {
    axios.get("http://localhost:5000/api/players")
      .then(res=> this.setState({players: res.data}))
      .catch(err =>console.log(err))
  }

  render() {
    return <div className="App">
      <PlayersList players={this.state.players}/>
    </div>
  }
}

export default App;
