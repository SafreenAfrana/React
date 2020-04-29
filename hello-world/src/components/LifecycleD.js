import React, { Component } from 'react'

export class LifecycleD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'saf'
        }
        console.log('LifecycleD constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleC getDerivedStateFromProps')
        return null
        }
        shouldComponentUpdate(){
            console.log('LifeCycleD ComponentUpdate')
            return true
        }
        getSnapshotBeforeUpdate(){
            console.log('LifeCycleD SnapshotBeforeUpdate')
            return null
        }
        componentDidUpdate(){
            console.log("LifeCycleD componentDidUpdate ")
        }
    render() {
        console.log('LifecycleD render')
        return (
            <div>
            LifecycleD
            </div>
        )
    }
}

export default LifecycleD
