export const validateCreateDialog = (values) => {
    const error = {
        first_name: {required: ""},
        last_name: {required: ""},
        email: {required: "", invalid:""},
        position: {required: ""},
        password: {required: "", invalid:""},
    }
    if(!values.first_name) {
        error.first_name = {required: "Պարտադիր դաշտ"}
    }
    if(!values.last_name) {
        error.last_name = {required: "Պարտադիր դաշտ"}
    }
    if(!values.email) {
        error.email = {required: "Պարտադիր դաշտ"}
    }
    if(!values.email.match(new RegExp('[a-z0-9]+@dflow+.com'))){
        error.email.invalid = "Սխալ Հասցե"
    }
    if(!values.position) {
        error.position = {required: "Պարտադիր դաշտ"}
    }
    if(!values.password) {
        error.password = {required: "Պարտադիր դաշտ"}
    }
    if(values.password.length < 8) {
        error.password.invalid = "Ավելի քան 8 նիշ"
    }
    return error
}