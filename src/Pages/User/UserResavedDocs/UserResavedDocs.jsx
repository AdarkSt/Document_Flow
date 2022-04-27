import { useLocation } from "react-router-dom"
import { useState, useCallback, useEffect } from "react"

import { ResavedDocs } from "../../../Components/ResavedDocs/ResavedDocs"
import { getResaverDocuments, updateDocument } from "../../../Services/documentService"
import { Loading } from "../../../Components/Loading/Loading"

export const UserResavedDocs = props => {
    const location = useLocation()
    const [user] = useState(location.state)
    const [resavedDocs, setResavedDocs] = useState([])
    const [loading, setLoading] = useState(false)

    const getResavedDocs = useCallback(async()=> {
        setLoading(true)
        const response = await getResaverDocuments({
            resaver_first_name:user.first_name,
            resaver_last_name:user.last_name,
            resaver_position:user.position
        })
        const docs = response.data
        setResavedDocs(docs)
        setLoading(false)
    },[user.first_name, user.last_name, user.position])

    useEffect(()=>{
        getResavedDocs()

        const intervalId = setInterval(()=> {getResavedDocs()}, 15000)
        
        return ()=> {
            clearInterval(intervalId)
        }
    },[getResavedDocs])

    const handleAccept = async (currentDocument, document_id) => {
        let error = false
        try{
            const res = await updateDocument({...currentDocument , step: 3, accepted:true}, document_id)
        } catch (err) {
            error = true
        }
        if(!error) {
            getResavedDocs()
        }
    }

    const handleCancel = async (currentDocument, document_id) => {
        let error = false
        try{
            const res = await updateDocument({...currentDocument , step: 3, accepted:false}, document_id)
        } catch (err) {
            error = true
        }

        if(!error) {
            getResavedDocs()
        }
    }

    return(
        loading ? <Loading/> : <ResavedDocs handleAccept={handleAccept} handleCancel={handleCancel} documents={resavedDocs}/>
    )
}
