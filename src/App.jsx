import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import './App.css'
import Table from './Table';

ChartJS.register(
  ArcElement,
  Tooltip, 
  // Legend
);

function App() {

  const tableData = [
    ["Strategy 1", 100000, 'Low', 1000, 100],
    ["Strategy 2", 12500, 'Medium', 1000, -100],
    ["Strategy 3", 12500, 'Medium', 1000, 100],
    ["Strategy 4", 25000, 'High', 1000, 100]
  ]

  const pieOptions = {
    options: {
      plugins: {
        legend: {
          position: 'bottom',
        },
      }
    },

  }

  const pieData = {
    labels: ["Strategy 1", "Strategy 2", "Strategy 3", "Strategy 4"],
    datasets: [
      {
        label: "Strategy",
        data: [50000, 12500, 12500, 25000],
        backgroundColor: [
          '#855CF8',
          '#E289F2',
          '#7879F1',
          '#B085FF'
        ]
      }
    ]
  }

  return (
    <>
      <div className='mainContainer'>
        <div className='pieCards'>
          <div className='pieHeader'>
            <p style={{marginLeft: '5px'}}>Lending Allocations</p>
            <p style={{marginRight: '5px'}}>$5000 USDC</p>
          </div>
          <div className='chartContainer'>

            <Pie options={pieOptions} data={pieData} />
          </div>
          <div className='legendContainer'>
            <div className='legendSlot'>
              <div className='icon'>

              </div>
              Strategy 1
            </div>

          </div>
        </div>
        <div className='tableCard'>
          <div className='tableHeader'>
            <p style={{marginLeft: '5px'}}>Strategy Performance</p>
          </div>
          <div className='tableCont'>
            <Table data={tableData}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
