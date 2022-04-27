import { Form, Formik } from "formik"
import * as Yup from "yup"

import { SendField } from "../SendField"
import { Button } from "../Material/Inputs/Button"

import "./SendForm.css"
import { FileField } from "../FileField/FileField"
import { useState } from "react"

export const SendForm = props => {

    const [document, setDocument] = useState("")
    const [value, setValue] = useState("")
    const {initialValues, handleSubmit} = props
    
    const handleFileChange=(event) => 
    {
        setDocument(event.target.files[0])
        setValue(event.target.value)
    }

    const reset = () => {
       
    }

    const onSubmit = (values) => {
        const allValues = {...values, document}
        handleSubmit(allValues)
        reset()
    }
    
    return(
        <Formik
            initialValues={{
                first_name: initialValues.first_name,
                last_name: initialValues.last_name,
                position: initialValues.position,
                resaiver_first_name: "",
                resaiver_last_name: "",
                resaiver_position: "",
                document: value    
            }}
            validationSchema= {Yup.object({
                //document: Yup.mixed().required("Այս դաշտը պարտադիր է"),
                resaiver_first_name: Yup.string().required("Այս դաշտը պարտադիր է"),
                resaiver_last_name: Yup.string().required("Այս դաշտը պարտադիր է"),
                resaiver_position: Yup.string().required("Այս դաշտը պարտադիր է")
            })}
            onSubmit={onSubmit}
        >
            <Form className="sendForm">
                <SendField
                    label="Անուն"
                    name="first_name"
                    type="text"
                    readOnly
                />
                <SendField
                    label="Ազգանուն"
                    name="last_name"
                    type="text"
                    readOnly
                />
                <SendField
                    label="Բաժին"
                    name="position"
                    type="text"
                    readOnly
                />
                <SendField
                    label="Հասցեատիրոջ անուն*"
                    name="resaiver_first_name"
                    type="text"
                />
                <SendField
                    label="Հասցեատիրոջ ազգանուն*"
                    name="resaiver_last_name"
                    type="text"
                />
                <SendField
                    label="Հասցեատիրոջ պաշտոն*"
                    name="resaiver_position"
                    type="text"
                />
                <FileField
                    label="Փաստաթուղթ*"
                    name="document"
                    handleChange={handleFileChange}
                    value={value}
                />
                <Button className="btn btn-secondary myBtn" title="Ուղարկել" type="submit"/>
            </Form>
        </Formik>
    )
}