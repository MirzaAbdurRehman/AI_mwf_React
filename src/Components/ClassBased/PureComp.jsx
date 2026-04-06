import React, { PureComponent } from "react";


class PureComp extends PureComponent{

    render(){
        console.log('Compnent Reder...')
        return <h2>{this.props.value}</h2>
    }
}


class Parent extends React.Component{
    state = {
        count: 0
    }

    render() {
        return (
            <>
            <h1>Pure Component Example</h1>
            <PureComp value='Hey Abdullah...'/>

            <button onClick={() => this.setState({count: this.state.count + 1})}> Count: {this.state.count}</button>
            </>
        )
    }
}


export default Parent;