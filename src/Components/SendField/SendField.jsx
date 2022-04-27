import { useField } from "formik";
import cx from "classnames"

import { Input } from "../Material/Inputs/Input";
import { useId } from "../../Hooks/useId";

import "./SendField.css"

export const SendField = props => {

    const [field, meta] = useField(props)
    const id = useId()
    const {label, className, ...inputProps} = props
    
    return(
        <div className={className}>
            <label className="form-label label" htmlFor={id}>{label}</label>
            <Input className={cx("form-control input", {
                "invalidInput" : meta.error
            })} {...inputProps} {...field}></Input>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}