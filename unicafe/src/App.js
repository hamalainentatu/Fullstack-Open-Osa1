import { useState } from 'react'

const Display = props => <div><h1>{props.value}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr><td>{props.text}</td><td>{props.value}</td></tr>
)

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (<div><p>No feedback given</p></div>)
  } 
  return (
  <div>
    <table>
    <tbody>
  <StatisticLine value={good} text ="good"/>
  <StatisticLine value={neutral} text ="neutral"/>
  <StatisticLine value={bad} text ="bad"/>

  <StatisticLine value={good + neutral + bad} text ="all"/>
  <StatisticLine value={(good - bad) / (good + neutral + bad)} text ="average"/>
  <StatisticLine value={good / (good + neutral + bad) + " %"} text ="positive"/>
  </tbody>
  </table>
  </div>
  )
}
  



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display value="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Display value="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>

    
  )
}

export default App
