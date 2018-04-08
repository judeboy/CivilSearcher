import React, { Component } from 'react'
import { Button, Collection, CollectionItem} from 'react-materialize'



class SearchAll extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }
  updateSearch(event){
    this.setState({search: event.target.value})
  }

  render() {
    let progs = []
    let urls = this.props.urls
    let progsAndUrls = []
    if(this.props.mounted === true){
      progs = this.props.progs.filter(
        (program) => {
          return program.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }
      )
      for(let i = 0; i < progs.length; i++){
        let arr=[]
        arr.push(progs[i],urls[i])
        progsAndUrls.push(arr)
      }
    }

    return (
      <Collection header="Search All Programs">
        <input type="text" placeholder="Search by Keyword"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        {progsAndUrls.map((ele,i) => {
          return(
            <CollectionItem key={i}>
              <div>{ele[0]}</div><br></br>
              <a target="_blank" href={`${ele[1]}`}>
                <Button>Learn More</Button>
              </a>
              <br></br>
            </CollectionItem>

          )
        })}
     </Collection>
    );

  }
}
export default SearchAll
