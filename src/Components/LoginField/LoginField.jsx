import { useField } from "formik"
import cx from "classnames"

import { useId } from "../../Hooks/useId"
import { Input } from "../Material/Inputs/Input"

import "./LoginField.css"

export const LoginField = (props) => {

    const [field, meta] = useField(props)
    const id = useId()
    const {label, className, ...inputProps} = props

    return (
        <div className={className}>
            <label className="form-label label" htmlFor={id}>{label}</label>
            <Input className={cx("form-control inputLogin", {
                "invalidInput" : meta.error
            })} {...inputProps} {...field}></Input>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}