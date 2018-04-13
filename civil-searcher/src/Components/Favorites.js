import React, { Component } from 'react'
// import { Carousel, Modal, Button} from 'react-materialize'



class Favorites extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  render(){

  return(
    <section favs={this.props.favs}></section>)
  }
}
export default Favorites;
