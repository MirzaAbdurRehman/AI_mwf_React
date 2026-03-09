import React, { Component } from 'react'

class PropsClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: props.name
        };
    }

    changeName= () => {
        this.setState({
            firstName: "Shanawaz"
        })
    }
  render() {
    return (
     <>
       <h2>Hello, {this.state.firstName}</h2>
       <button onClick={this.changeName}> Change Name</button>
     </>
    )
  }
}

export default PropsClass