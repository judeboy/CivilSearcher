import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import {Footer, Navbar, NavItem} from 'react-materialize'
import SearchAll from './Components/SearchAll'
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
          <Navbar brand='Civil Searcher' right>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='/search'>Search</NavItem>
          </Navbar>
          <Route exact path="/search" render={() => (
            <SearchAll urls={this.state.allUrls} progs={this.state.allProgs} mounted={this.state.mounted} />
            )}
          />
            <Footer copyrights="2018 Copyright Text" className='example'>
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
