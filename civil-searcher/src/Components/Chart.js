import React, { Component } from 'react'
import { Modal, Button} from 'react-materialize'
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
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
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
        <br></br>
        <div className='intro'>The US Government has thousands of programs that provide funding to both individuals and businesses for a myriad of reasons, from education and business loans to low-income housing assistance. The problem is that navigating the .GOV sites is treacherous and rarely provides ease of access. What Civil Searcher aims to do is streamline the process by providing a central database to access and apply for government aid.</div>
      </div>
    );
  }
}

export default Chart;
