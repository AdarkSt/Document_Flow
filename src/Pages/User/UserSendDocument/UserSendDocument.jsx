import { useHistory, useLocation } from "react-router-dom"
import { SendForm } from "../../../Components/SendForm/SendForm"
import { useId } from "../../../Hooks/useId"
import { createDocument } from "../../../Services/documentService"

export const UserSendDocument = props => {

    const location = useLocation()
    const history = useHistory()

    const globalUser = location.state
    const {first_name, last_name, position, id} = globalUser
    const document_id = useId()

    const handleSubmit = async (values) => {
        const currentDocument = {...values, sender_id:id, id:document_id, step:1}
        await createDocument(currentDocument)
        history.replace(`/${globalUser.role}:${globalUser.id}/resaved_docs`, globalUser)
    }

    return(
        <div>
            <SendForm handleSubmit={handleSubmit} initialValues = {{first_name, last_name, position}}/>        
        </div>
    )
}