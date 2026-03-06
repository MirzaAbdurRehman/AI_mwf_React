
import React, { Component } from 'react'

export default class States extends Component {


    state = {
        name: 'Shahrukh',
        age: 20
    }

    updateInfo = () => {
      this.setState({
         name: 'Azeem',
         age: 22
      })
    }

  render() {
    return (
      <div>
        <h2>Hey, {this.state.name}</h2>
        <h2>Age, {this.state.age}</h2>
        <button onClick={this.updateInfo}> Change Data</button>
      </div>
      

    )
  }
}
