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
      programShort: {},
      allProgs: [],
      mounted: false
    }
  }

  async componentDidMount() {
    const response = await fetch('https://judahhh.herokuapp.com/')
    const json = await response.json()
    let makeProgramsArray=(json)=>{
      let arrayOfProgs = []
      for(let i = 0; i < json.length; i++){
        arrayOfProgs.push(json[i].ProgTitle)
        this.setState({allProgs: arrayOfProgs})
        // console.log(this.state.allProgs);
      }
    }
    makeProgramsArray(json)

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
    
    this.setState({
      mounted: true
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{this.state.greeting}</h1>
          </header>
          <Route exact path="/search" render={() => (
            <SearchAll progs={this.state.allProgs} mounted={this.state.mounted} />
            )}/>
        </div>
      </Router>
    );
  }
}

export default App;
