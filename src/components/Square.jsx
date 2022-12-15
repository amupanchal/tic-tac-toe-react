import React from 'react'

const Square = (props) => {
    return (
        <div onClick={props.onClick} style={{ backgroundColor: " #34495e", border: "1px solid #465f78", height: '100px', width: "100px", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <h1 className='square'>
                {props.value}
            </h1>
        </div >
    )
}

export default Square
