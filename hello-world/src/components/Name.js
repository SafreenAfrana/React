import React from 'react'

function Name({myName}) {
    if(myName === 'Afrana'){
        throw new Error('Not a name');
        
    }
    return (
        <div>
            {myName}
        </div>
    )
}

export default Name
