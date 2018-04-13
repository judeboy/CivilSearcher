import React, { Component } from 'react'
import { Carousel, Modal, Button} from 'react-materialize'

class GettingStarted extends Component{
  render(){
    return(
      <div>
        <Carousel images={[
          'https://lorempixel.com/250/250/nature/1',
          'https://lorempixel.com/250/250/nature/2',
          'https://lorempixel.com/250/250/nature/3',
          'https://lorempixel.com/250/250/nature/4',
          'https://lorempixel.com/250/250/nature/5'
        ]} />
      <Modal
        header='Modal Header'
        trigger={<Button>MODAL</Button>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Modal>
    </div>
    )
  }

}

export default GettingStarted
