import React from 'react'


    const Greet=(props) => {
        const {name,nickName}=props
    
        
    return (
        <div>
            <h1>Hello {name} {nickName}</h1>
            {props.children}
        </div>
    )
    }


export default Greet
