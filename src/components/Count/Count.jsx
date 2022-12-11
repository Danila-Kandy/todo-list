import './Count.css'
import React from 'react'

class DoneValue extends React.Component {
  render() {
    const { todos, done, left } = this.props
    return (
      <div className="counter">
        <p>All: {todos}</p>
        <p>Done: {done}</p>
        <p>Left: {left}</p>
      </div>
    )
  }
}

export default DoneValue
