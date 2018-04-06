import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class SearchAll extends Component {
  render() {
    var progs = []
    var array = []
    if(this.props.mounted === true){
      console.log('we are good');
      progs = this.props.allProgs
      for(let i = 0; i < progs.length; i++){
        let arr = []
        arr.push(progs[i])
        array.push(arr)
      }
    }

    return (
      <div>
      <h1>SearchProgs</h1>
      <div id='containerOfColumns'>
        <div className='trelloColumnScrollable'>
          <span className='columnTitles'>Available Programs</span>
        {array.map((ele,i) => {
          return(
            <div>
                <div className="singleProgramDiv">
                  <a target="_blank" href={`${ele[1]}`}><div className="ProgResult" key={i}>{ele[0]}</div></a>
                </div>
            </div>
          )
        })}
       </div>
       <div className="trelloColumns"> <span className='columnTitles'>Interesting</span></div>
       <div className="trelloColumns"> <span className='columnTitles'>Applied</span></div>
       <div className="trelloColumns"> <span className='columnTitles'>Follow-Up</span></div>
       <div className="trelloColumns"> <span className='columnTitles'>Completed!</span></div>
       </div>
     </div>
    );

  }
}
export default SearchAll;
