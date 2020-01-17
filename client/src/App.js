import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import PlayersList from './components/PlayersList'
import useDarkMode from './hooks/useDarkMode'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
      darkMode: false,
      isDarkMode: "Dark Mode"
    }
  }//end constructor

  componentDidMount = () => {
    axios.get("http://localhost:5000/api/players")
      .then(res=> this.setState({players: res.data}))
      .catch(err =>console.log(err))

      
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.darkMode === true){
  //     this.setState({isDarkMode: "Light Mode"})
  //   } 
    
  //    if (prevState.darkMode === false){
  //     this.setState({isDarkMode: "Dark Mode"})
  //   }
  // }

  

  render() {
    
    return <div className="App">
      <PlayersList players={this.state.players} isDarkMode={this.state.isDarkMode} darkMode={this.state.darkMode}/>
    </div>
  }
}

export default App;
