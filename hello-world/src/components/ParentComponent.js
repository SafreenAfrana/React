import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ParentName:'Sithi'
        }
    }
    greetParent()
    {
        alert(`Hello ${this.state.ParentName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={() =>this.greetParent()}/>
            </div>
        )
    }
}

export default ParentComponent
