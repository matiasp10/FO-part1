import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total == 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good: " value={good} />
            <StatisticLine text="Neutral: " value={neutral} />
            <StatisticLine text="Bad: " value={bad} />
            <StatisticLine text="All: " value={total} />
            <StatisticLine text="Average: " value={(good - bad) / total} />
            <StatisticLine text="Positive: " value={(good / total) * 100} />
          </tbody>
        </table>

      </>
    )
  }
}

const StatisticLine = ({ text, value }) => {
  return (<tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)
}

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}