import { BrowserRouter, Route } from "react-router-dom";

import {LoginPage} from "../Pages/Login/index"

import { UserRoutes } from "../Pages/User/UserRoutes/UserRoutes";

export const Routes = () => {

    return (
        <BrowserRouter>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/user:id" component={UserRoutes}/>
            <Route path="/admin:id" component={UserRoutes}/>
        </BrowserRouter>
    )
}