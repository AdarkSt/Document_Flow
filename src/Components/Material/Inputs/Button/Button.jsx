import cx from  "classnames"

import "./Button.css"

export const Button = (props) => {

    const {className, title, ...buttonProps} = props

    return (
        <button 
            className= {cx(className, {
                
            })}
            {...buttonProps}
        >
            {title}
        </button>
    )
}