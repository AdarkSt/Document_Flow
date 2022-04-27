import "./Cell.css"
import React from "react"

export const Cell =  props => {

    const {item, coll, mRef} = props
    
    return (
        <td ref={mRef}>{item[coll.key]}</td>
    )
}