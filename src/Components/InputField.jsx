import React from 'react'

function InputField(props) {
    return (
        <div>
            <input type='text' defaultValue='how many porches' id='porchNum'  />
            <input type='text' defaultValue='how many floors' id='floorNum' />
            <input type='submit' defaultValue='Submit building parameters' onClick={props.submit} />
        </div>
    )
}

export default InputField

