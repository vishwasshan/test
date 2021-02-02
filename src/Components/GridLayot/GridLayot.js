import React from 'react'
import './GridLayot.scss'

function GridLayot({item}) {
    return (
        <div className="gridLayot">
             <img src={item.img} alt=""/>
        </div>
    )
}

export default GridLayot
