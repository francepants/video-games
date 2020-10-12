import React, { Component } from 'react'

class App extends Component {
  componentDidMount(){
    fetch("http://localhost:3001/users")
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <h1>Video Games</h1>
      </div>
    )
  }
}

export default App
