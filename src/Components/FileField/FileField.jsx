import { useField} from "formik"
import cx from "classnames"

import { useId } from "../../Hooks/useId"
import { Input } from "../Material/Inputs/Input/index"
import "./FileField.css"
import { useState } from "react"

export const FileField = props => {
    
    const [field, meta] = useField(props)
    const id = useId()
    const {label, className, handleChange,value, ...inputProps} = props

    return(
        <div className={className}>
            <label className="form-label label" htmlFor={id}>{label}</label>
            <Input className={cx("form-control input", {
                "invalidInput" : meta.error
            })} type="file" {...inputProps} {...field} value={value} onChange={handleChange}></Input>
            {value ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}