import React, { Component } from 'react'
import { Preloader, Col, Modal, Button, Collection, CollectionItem} from 'react-materialize'
import '../App.css'



class SearchAll extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      favs: [],
      hidden: false
    }
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  updateFavs(event){
    this.setState({favs: [...this.state.favs, event.target]})
    console.log(this.state.favs);
  }

  setFavsState(favs){
    this.setSet({favs: favs})
  }

  render() {
    let progs = []
    let urls = this.props.urls
    let progsAndUrls = []
    let hidden = false;
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
    let loader = document.getElementById('preloader')
    if(this.props.mounted === true){
      loader.style.display = 'none'
    }
    return (
      <Collection className='collection' >
        <h4>Search All Programs</h4>

        <input s={6} type="text"
          placeholder='Type Search Here'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <Modal
          header='Help Searching'
          trigger={<Button className='waves-effect waves-light btn-small red'>Need Help?</Button>}>
          <p>Type any word into the search bar to generate a list of programs that contain that word. For example: type 'GRANTS' to see a list of programs that provide grants. Click the Learn More button to be routed to the .gov website for more information regarding that program. </p>
        </Modal>
        <br></br>
        <Col s={4} id='preloader'>
          <Preloader hidden={hidden} size='big'/>
        </Col>
        {progsAndUrls.map((ele,i) => {
          return(
            <CollectionItem className='collectionItem' key={i} onClick={this.updateFavs.bind(this)}>
              <div>{ele[0]}</div><br></br>
              <a target="_blank" href={`${ele[1]}`}>
                <Button className='#689f38 light-green darken-2'>Learn More</Button>
              </a>
              <br></br>
              <div><br></br></div>
            </CollectionItem>
          )
        })}
        <CollectionItem className='invisible'><br></br>
        <div><br></br></div></CollectionItem>
     </Collection>
    );

  }
}
export default SearchAll
