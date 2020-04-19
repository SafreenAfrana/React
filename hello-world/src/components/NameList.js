import React from 'react'
import Person from './Person'
function NameList() {
        const persons=[{
            id:1,
            name:'safreen',
            age:20
            },
            {
                id:2,
                name:'salman',
                age:22
            }
        ]
        const personlist = persons.map(person => (<Person Key={person.id} person={person} />))
    return (
        <div>
            {personlist}
        </div>
    )
}

export default NameList
