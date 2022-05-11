import { LoginForm } from "./LoginForm/LoginForm"

import pageLogo from "./Assets/pageLogo.png"
import "./LoginPage.css"
import AuthService from "../../Services/AuthService"
import { useHistory } from "react-router-dom"
import {toast} from "react-toastify"


export const LoginPage = (props) => {

    const history = useHistory()

    const handleSubmit = async (values) =>{
        const {email, password} = values
        try{
            const response = await AuthService.login(email, password);
            if(response.status === 403){
                toast.error("Գաղտնաբառը սխալ է")
            }
            if(response.status === 402){
                toast.error("Կապի խափանում")
            }
            if(response.status === 401){
                toast.error("Էլ․ հասցեն սխալ է")
            }

            const data = await response.json()
            localStorage.setItem("token", data.token.accessToken)

            let role = ""
            data.userData.role === "admin" ? role="admin": role="user"
            
            history.replace({
                pathname: `/${role}:${data.userData.id}/documents`,
                state: data.userData,
            })
        }
        catch (error) {
            console.log(error)
        }   
        
    }

    return (
        <div className="loginPage">
            <div className="loginPageContent">
                <div className="heading">
                    <img className="pageLogo" src={pageLogo} alt=""/>
                    <h1>DocFlow</h1>
                </div>
                <LoginForm handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}