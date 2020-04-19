import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                username:'',
                email:'',
                comments:'',
                topic:''
        }
    }
    handleUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    handleComments = (event) =>
    {
        this.setState({
            comments:event.target.value
        })
    }
    handleTopics =(event) =>
    {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>
    {
        alert(` ${this.state.username}
        ${this.state.email}
        ${this.state.comments}
        ${this.state.topic}`)
        
    }
    render() {
        return (
            <div>
            <table>
            <tr>
            <td>  <h2>Name:</h2></td>
            <td> <input type="text" value={this.state.username} onChange={this.handleUsername} /></td>
                </tr>
                <tr>
                <td><h2>Email:</h2></td>
                <td><input type="text" value={this.state.email} onChange={this.handleEmail} /></td></tr>
                <tr><td><h2>Comments:</h2></td>
                <td><textarea value={this.state.comments}  onChange={this.handleComments} /></td></tr>
                <tr><td><h2>Topic:</h2></td>
                <td><select value={this.state.topic} onChange={this.handleTopics}>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                </select></td></tr>
                <tr>
                <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                </tr>
                </table>
            </div>
        )
    }
}

export default Form
