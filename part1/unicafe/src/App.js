import {useState} from "react"

const Button = ({handleClick, text}) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) =>{
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  
  )
}

const Statistics =(props) => {
  
  if (props.all === 0 ){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
        </div>
    )
  }
  return (
    
    <table>
      <thead>
        <tr>
          <th>
            <h1>statistics</h1>
            </th>
        </tr>
      </thead>

    <tbody>
          <StatisticLine text="good"    value={props.good} />
        
          <StatisticLine text="neutral" value={props.neutral} />
      
          <StatisticLine text="bad" value={props.bad} />
        
          <StatisticLine text="all" value={props.all} />
        
          <StatisticLine text="average" value={props.average} />
          
          <StatisticLine text="positive" value={props.positive} />
          
    </tbody>
      </table>
  )
}
    
const App = () =>{
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // caculate the total number of collected feedback
  const all = good + neutral + bad

  // caculate the average score of the feedback
  const average = ((good - bad) / all).toFixed(1)

  //caculate the percentage of positive feedback
  const positive = (good / all).toFixed(3) * 100 + '%'

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {() =>{setGood(good + 1)}} text="good"/>
      <Button handleClick = {() =>{setNeutral(neutral + 1)}} text="neutral"/>
      <Button handleClick = {() =>{setBad(bad + 1)}} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App;
