import cx from "classnames"

import "./Input.css"

export const Input = (props) => {
    
    const {className, ...inputProps} = props

    return (
        <input
            className={cx(className, {
                "myInput" : true
            })}
            {...inputProps}
        >
        </input>
    )
}