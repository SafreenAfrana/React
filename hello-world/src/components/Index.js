import React from 'react'

function Index() {
    const names=['safreen','afrana']
    const namelist = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {namelist}
        </div>
    )
}

export default Index
