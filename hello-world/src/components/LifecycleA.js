import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
 

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                name:'saf'
        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
            <div>   LifeCycleA</div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
