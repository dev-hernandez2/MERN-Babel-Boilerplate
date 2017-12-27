import React, { Component } from 'react'
import 'whatwg-fetch'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response : res.pages.home }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('api/v1/home')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         {this.state.response.title}
        </p>
      </div>
    )
  }
}

export default App
