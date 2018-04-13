import React, { Component } from 'react'
import { Modal, Button, Collection, CollectionItem} from 'react-materialize'
import '../App.css'



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
      <Collection className='collection' >
        <h4>Search All Programs</h4>
        <Modal
          header='Help Searching'
          trigger={<Button>Help</Button>}>
          <p>Type any word into the search bar to generate a list of programs that contain that word. For example: type 'grant' to see a list of all of the programs that offer grants. When you see a program that may fit your needs, click the Learn More button to be routed to the .gov website for more information regarding that program. </p>
        </Modal>
        <input s={6} type="text"
          placeholder='Search by Keyword'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        {progsAndUrls.map((ele,i) => {
          return(
            <CollectionItem className='collectionItem' key={i}>
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
