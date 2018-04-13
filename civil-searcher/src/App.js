import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import {Footer, Navbar, NavItem} from 'react-materialize'
import SearchAll from './Components/SearchAll'
import GettingStarted from './Components/GettingStarted'
import Chart from './Components/Chart'
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      programShort: {},
      allProgs: [],
      allUrls: [],
      mounted: false,
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
          <Navbar id='navbar' className='#37474f blue-grey darken-3' brand='Civil Searcher' right>
              {/* <NavItem href='/gettingstarted'>Getting started</NavItem> */}
              <NavItem href='/search'>Search All Programs</NavItem>
              {/* <NavItem href='/hhs'>Health & Human Services</NavItem> */}
              <NavItem href='/'>Home</NavItem>
          </Navbar>
            <p>Funding at your Fingertips!</p>
          <Route exact path="/" render={() => (
            <Chart />
            )}
          />
          <Route exact path="/search" render={() => (
            <SearchAll urls={this.state.allUrls} progs={this.state.allProgs} mounted={this.state.mounted} />
            )}
          />
          <Route exact path="/gettingstarted" render={() => (
            <GettingStarted urls={this.state.allUrls} progs={this.state.allProgs} mounted={this.state.mounted} />
            )}
          />
          <Footer className='#37474f blue-grey darken-3' copyrights="2018 Copyright Judah Trimmer">
            <h6 className="white-text">Civil Searcher</h6>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
