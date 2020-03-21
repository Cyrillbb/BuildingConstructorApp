import React from 'react'
import TopBlock from './BuilingBlockComponents/TopBlock'
import GroundBlock from './BuilingBlockComponents/GroundBlock'
import MiddleBlock from './BuilingBlockComponents/MiddleBlock'
import './BuildingBlock.css'

function Buildingblock(props) {
    return (
    <div className='BuildingBlock'>
        <TopBlock />
    {Array.from(Array(props.floorNum).keys()).map(item => <MiddleBlock />)}
        <GroundBlock />
    </div>
    )
}

export default Buildingblock


