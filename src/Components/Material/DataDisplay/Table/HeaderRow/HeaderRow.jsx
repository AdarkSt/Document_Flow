import "./HeaderRow.css"
import React from "react"

export const HeaderRow = props => {

    const {Cell, item, colls} = props

    return(
        <tr>
            {colls.map((coll, index) => <Cell key={index} item={item} coll={coll} />)}
        </tr>
    )
}