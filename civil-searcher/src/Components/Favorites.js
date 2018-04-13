import React, { Component } from 'react'
import { Carousel, Modal, Button} from 'react-materialize'


let aValue = localStorage.getItem('favorites', <br></br>)
console.log(aValue);

class Favorites extends Component {
  render(){
  return(
    <div >
    {aValue.value}
  </div>)
  }
}
export default Favorites;
