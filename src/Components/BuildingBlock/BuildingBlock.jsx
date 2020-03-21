import React from 'react'

function Buildingblock(props) {
    return (
    <div>
        {Array.from(Array(props.floorNum).keys()).map(item => <div key={item}>123</div>)}        
    </div>
    )
}

export default Buildingblock


