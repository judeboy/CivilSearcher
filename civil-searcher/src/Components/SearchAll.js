import React, { Component } from 'react';




class SearchAll extends Component {
  render() {
    let progs = []
    if(this.props.mounted === true){
      // console.log('mounted');
      // console.log(this.props.progs);
      progs = this.props.progs
    }

    return (
      <div>
        <h1>SearchProgs</h1>
        <div id='containerOfColumns'>
          {progs.map((ele,i) => {
            return(
              <div key={i}>
                <div>{ele}</div>
              </div>
            )
          })}
       </div>
     </div>
    );

  }
}
export default SearchAll;
