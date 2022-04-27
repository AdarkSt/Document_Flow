import "./HeaderCell.css"
import React from "react"

export const HeaderCell = props => {

    const {coll} = props

    return (
        <td>{coll.label}</td>
    )
}