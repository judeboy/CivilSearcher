import React, { Component } from 'react'
import { Collection, CollectionItem} from 'react-materialize'



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
    if(this.props.mounted === true){
      // console.log('mounted');
      // console.log(this.props.progs);
      progs = this.props.progs.filter(
        (program) => {
          return program.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1
        }
      )
    }

    return (
      <Collection header="Search All Programs">
        <input type="text" placeholder="Search by Keyword"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        {progs.map((ele,i) => {
          return(
            <CollectionItem key={i}>
              <div>{ele}</div>
            </CollectionItem>
          )
        })}
     </Collection>
    );

  }
}
export default SearchAll;
