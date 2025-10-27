import './App.css'
import Chart from './components/Chart/Chart'
import StackAreaChart from './components/StackAreaChart/StackAreaChart'

function App() {

  return (
    <div>
      <h1>This is Line Chart</h1>
      <Chart></Chart>
      <h1>This is Stacked Area Chart</h1>
      <StackAreaChart></StackAreaChart>
    </div>
  )
}

export default App
