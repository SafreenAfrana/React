import React, { Component } from 'react'
import MemoComp from './MemoComp'


class ParentMemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'safreen'
        }
    }
    componentDidMount(){
        this.setState(
            {
                name:'safreen'
            }
        )
    }
    render() {
        return (
            <div>
                Parent Memo Component
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentMemo