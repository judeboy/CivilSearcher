import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import SearchAll from './Components/SearchAll'
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Hello',
      urls: {},
      programShort: {},
      allProgs: [],
    }
  }

  async componentWillMount() {
    const response = await fetch('https://judahhh.herokuapp.com/')
    const json = await response.json()
    let arrayOfProgs=(json)=>{
      for(let i = 0; i < json.length; i++){
        this.setState({allProgs: json[i].AgencyShort })
        // console.log(json[i].ProgTitle);
      }
    }
    arrayOfProgs(json)
    let organizeProgShort=(json)=>{
      let obj = {}
      let progs = json
      for (let i in progs){
        // console.log("i", progs[i].AgencyShort, progs[i].ProgTitle);
        if (!obj[progs[i].AgencyShort]){
          obj[progs[i].AgencyShort] = [progs[i].ProgTitle]
          // obj[progs[i].AgencyShort] = [progs[i].ProgTitle]
        } else {
          obj[progs[i].AgencyShort].push(progs[i].ProgTitle)
          this.setState({programShort: obj})
        }
      }
      // console.log("function Object", this.state.programs)
    }
    organizeProgShort(json)

  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{this.state.greeting}</h1>
          </header>
          <Route exact path="/search" render={() => (
            <SearchAll  />
            )}/>
        </div>
      </Router>
    );
  }
}

export default App;
