import { useState } from 'react'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const Display = props => <div><h1>{props.value}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))

  const increasePoints = (index) => {
    const copy = [...points]
    // kasvatetaan taulukon paikan 2 arvoa yhdellä
    copy[index] += 1 
    setPoints(copy)
  }

  const findMax = () => {
    const max = Math.max(...points)
    const index = points.indexOf(max)
    return index
  }

  


   

  return (
    <div>
      <Display value="Anecdote of the day" />
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => increasePoints(selected)} text="vote" />
      <Button handleClick={() => setSelected(getRandomIntInclusive(0,6))} text="next anecdote" />

      <Display value="Anecdote with most votes" />
      {anecdotes[findMax()]}
    </div>
  )
}

export default App