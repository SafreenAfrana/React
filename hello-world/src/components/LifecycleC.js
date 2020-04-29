import React, { Component } from 'react'
import LifecycleD from './LifecycleD'


export class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                name:'saf'
        }
        console.log('LifecycleC constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleC getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(){
        console.log('LifeCycleC ComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleC SnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleC componentDidUpdate ")
    }
    changeState = () =>
    {
        this.setState({
            name:'code'
        })
    }
    render() {
        console.log('LifeCycleC render')
        return (
            <div>
            <div>LifecycleC</div>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleD />
            </div>
        )
    }
}

export default LifecycleC
