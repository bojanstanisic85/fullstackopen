import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, bad, neutral, all }) => {
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const average = all === 0 ? 0 : (good - bad) / all
  const positivePercentage = all === 0 ? 0 : (good / all) * 100
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={`${positivePercentage.toFixed(1)} %`} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleClickGood = () => {
    let newGood = good + 1
    setGood(newGood)
    setAll(newGood + neutral + bad)
  }

  const handleClickNeutral = () => {
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
    setAll(good + newNeutral + bad)
  }

  const handleClickBad = () => {
    let newBad = bad + 1
    setBad(newBad)
    setAll(good + neutral + newBad)
  }

  return (
    <div>
      <h1>Unicafe give feedback</h1>
      <Button handleClick={handleClickGood} text={'good'} />
      <Button handleClick={handleClickNeutral} text={'neutral'} />
      <Button handleClick={handleClickBad} text={'bad'} />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  )
}


export default App

