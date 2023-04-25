import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  // Using an array to store the votes of each anecdote in the state
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote =() =>{
    // create a copy of the array
    const newVote = [...votes]
    // increment each property value by one
    newVote[selected] += 1
    setVotes(newVote)
  }
  
  // find out the largest vote's index then get the largest vote anecdote
  const maxVoteIndex = votes.indexOf(Math.max(...votes))
  const maxVoteAnecdote = anecdotes[maxVoteIndex]

  return (
    <div>
      <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
       <p>has {votes[selected]} votes</p>
      <div>
      <button onClick={handleVote}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
        {maxVoteAnecdote}
        <p>has {votes[maxVoteIndex]} votes</p>
    </div>
  )
}

export default App
