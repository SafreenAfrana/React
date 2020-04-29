import React, { Component } from 'react'

class ErrorBoundary extends Component {
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    constructor(props) {
        super(props)
    
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return <h1>Wrong</h1>
        }
        return (
            
                this.props.children
            
        )
    }
}

export default ErrorBoundary
