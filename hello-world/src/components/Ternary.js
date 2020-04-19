import React, { Component } from 'react'

export class Ternary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false
        }
    }
    render() {

        return(
            this.state.isLoggedIn ? (<div><h1>Hello User</h1></div>): (<div><h1>Welcome User</h1></div>)
        )
    }
}

export default Ternary
