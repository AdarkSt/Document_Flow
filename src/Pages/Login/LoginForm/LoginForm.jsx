import {Form, Formik} from "formik"
import * as Yup from "yup"

import { LoginField } from "../../../Components/LoginField/LoginField"
import { Button } from "../../../Components/Material/Inputs/Button"

import "./LoginForm.css"
import loginImg from "../Assets/loginImg.png"
import passwordImg from "../Assets/passwordImg.png"

export const LoginForm = (props) => {

    const {handleSubmit} = props

    return (
        <Formik 
            initialValues={{
            email: "",
            password: "",
        }}
        validationSchema={Yup.object({
            email: Yup.string()
            .required("Այս դաշտը պարտադիր է")
            .matches(new RegExp('[a-z0-9]+@dflow+.com'), "Սխալ էլ․ հասցե"),
            password: Yup.string()
            .required("Այս դաշտը պարտադիր է")
            .min(8, "Ոչ պակաս քան 8 նիշ")
            .matches(/[a-zA-Z0-9]/, "Լատ․ այբ․ տառեր, թվեր")
        })}
        onSubmit={values => handleSubmit(values)}
        >
            <Form className="form">
                <div className="fieldWrapper">
                    <img className="fieldImg" src={loginImg} alt=""></img>
                    <LoginField 
                        label=""
                        type="text"
                        name="email"
                        className="w-100"
                        placeholder="Էլ․ հասցե"
                    />
                </div>
                <div className="fieldWrapper">
                    <img className="fieldImg" src={passwordImg} alt=""></img>
                    <LoginField 
                        label=""
                        type="password"
                        name="password"
                        className="w-100"
                        placeholder="Գաղտնաբառ"
                        autoComplete="on"
                    />
                </div>
                
                <Button className="btn btn-primary loginButton" title="Մուտք" type="submit"/>
            </Form>
        </Formik>
    )
}