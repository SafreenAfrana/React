import React from 'react'

function Person({person,key}) {
    return (
        <div>
            <h2>I am {person.name} and I am {person.age}</h2>
        </div>
    )
}

export default Person
