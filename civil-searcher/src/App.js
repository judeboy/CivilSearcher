import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import {Button, Modal, Footer, Navbar, NavItem} from 'react-materialize'
import SearchAll from './Components/SearchAll'
import GettingStarted from './Components/GettingStarted'
import About from './Components/About'
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      programShort: {},
      allProgs: [],
      allUrls: [],
      mounted: false
    }
  }

  async componentDidMount() {
    const response = await fetch('https://judahhh.herokuapp.com/')
    const json = await response.json()
    let makeProgramsArray = (json) => {
      let arrayOfProgs = []
      for(let i = 0; i < json.length; i++){
        arrayOfProgs.push(json[i].ProgTitle)
      }
      this.setState({allProgs: arrayOfProgs})
      // console.log(this.state.allProgs);
    }
    makeProgramsArray(json)

    let makeUrlsArray = (json) => {
      let arrayOfUrls = []
      for (let i = 0; i < json.length; i++){
        arrayOfUrls.push(json[i].WebURL)
      }
      this.setState({allUrls: arrayOfUrls})
      // console.log(this.state.allUrls);
    }
    makeUrlsArray(json)

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
      // console.log("function Object", this.state.programShort.DOD)
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
          <Navbar className='#37474f blue-grey darken-3' brand='Civil Searcher' right>
            <NavItem href='/gettingstarted'>Getting started</NavItem>
            <NavItem href='/search'>Search ALL Programs</NavItem>
            <NavItem href='/hhs'>Health & Human Services</NavItem>
            <NavItem href='/about'>About</NavItem>
            
          </Navbar>
          <Route exact path="/search" render={() => (
            <SearchAll urls={this.state.allUrls} progs={this.state.allProgs} mounted={this.state.mounted} />
            )}
          />
          <Route exact path="/gettingstarted" render={() => (
            <GettingStarted urls={this.state.allUrls} progs={this.state.allProgs} mounted={this.state.mounted} />
            )}
          />
          <Route exact path="/about" render={() => (
            <About urls={this.state.allUrls} progs={this.state.allProgs} mounted={this.state.mounted} />
            )}
          />
          <Footer className='#37474f blue-grey darken-3' copyrights="2018 Copyright Text">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
