import { Route, useLocation, useParams, useRouteMatch } from "react-router-dom"

import { UserPageLayout } from "../Layoutes/UserPageLayout/UserPageLayout"
import { UserDocuments } from "../UserDocuments"
import { UserResavedDocs } from "../UserResavedDocs"
import { UserSendedDocs } from "../UserSendedDocs"
import { ManageUser } from "../Admin/ManageUser/ManageUser"

const User = props => {
    const params = useParams()
    
    return (
        <>  
            {params.page === "resaved_docs" && <UserResavedDocs/>}
            {params.page === "documents" && <UserDocuments/>}
            {params.page === "sended_docs" && <UserSendedDocs/>} 
            {params.page === "manage_workers" && <ManageUser/>}
        </>
    )
}

export const UserRoutes = props => {

    const {path, url} = useRouteMatch()
    const location = useLocation()

    return(
        <UserPageLayout 
            url={url} 
            user ={location.state} 
        >
            <Route exact path={`${url}/:page`} component={User}/>
            <Route exact path={path} component={UserDocuments}/>
        </UserPageLayout>
    )
}