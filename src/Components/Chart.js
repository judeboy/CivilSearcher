import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import '../App.css';



class Chart extends Component {
  constructor(props){
    super(props)
      this.state={
        chartData: {
          labels: ["HHS", "HUD", "SBA", "EDU", "EPA"],
          datasets: [{
              label: 'Programs per Gov. Agency',
              data: [445, 230, 55, 100, 390],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }

      }
    }


  render() {
    return (
      <div className='chart'>
        <h5>Funding at your Fingertips!</h5><br></br>
        <Bar
        	data={this.state.chartData}
        	options={{
        		maintainAspectRatio: true
        	}}
        />

        <div className='intro'>The US Government has thousands of programs that provide funding and monitary assistance to both individuals and businesses. The problem is that the .GOV sites rarely provide ease of access. What Civil Searcher aims to do is help those in need to find financial assistance by providing a central database to access and apply for government aid.</div>
        <div><br></br>
        <a className="waves-effect waves-light btn green" href='/search'>Find Funding!</a>
        </div>
      </div>
    );
  }
}

export default Chart;
