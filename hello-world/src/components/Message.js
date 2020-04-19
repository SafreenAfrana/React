import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:'Welcome visitor'
        }
    }
    changeMessage()
    {
        this.setState({
            message:'thank you'
        })
    }
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() =>this.changeMessage()}>Click</button>
            </div>
        )
    }
}

export default Message
