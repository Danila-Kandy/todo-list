import React from 'react'
import Todo from '../Todo/Todo'
import Count from '../Count/Count'
import './App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      todos: [
        {
          name: 'Помыть попу',
          done: true,
        },
        {
          name: 'Побесить соседа',
          done: false,
        },
      ],
    }
  }

  render() {
    const doneCount = this.state.todos.filter((e) => e.done).length
    const todosCount = this.state.todos.length
    const leftCount = todosCount - doneCount
    return (
      <div className="container">
        <div>
          <Count left={leftCount} done={doneCount} todos={todosCount} />
        </div>
        <div>
          <div className="creatingTodo">
            <input value={this.state.name} onChange={this.handleSetName} />
            <button onClick={this.handleAddTodo}>Add</button>
          </div>
          {this.state.todos.map((todo) => (
            <Todo
              name={todo.name}
              done={todo.done}
              onClick={this.handleCheckDelete}
              onDone={this.handleSetDone}
            />
          ))}
        </div>
      </div>
    )
  }

  handleCheckDelete = (name) => {
    this.setState({
      todos: this.state.todos.filter((e) => e.name !== name),
    })
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSetDone = (newDone, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done: newDone } : todo
      ),
    })
  }

  handleAddTodo = () => {
    const { name, todos } = this.state
    const todo = { name, done: false }
    let firstCondition = todo.name.trim().length !== 0
    let secondСondition =
      todos.filter(
        (e) => e.name.split(' ').join('') === todo.name.split(' ').join('')
      ).length === 0

    if (firstCondition && secondСondition) {
      this.setState({
        name: '',
        todos: todos.concat([todo]),
      })
    }
    if (!firstCondition) {
      alert(
        'Я понимаю, жизнь это пустота и все такое, но не нужно ставить это задачей'
      )
    }
    if (!secondСondition) {
      alert('Я понимаю, каждый день одно и тоже, но пришло время что-то менять')
    }
  }
}

