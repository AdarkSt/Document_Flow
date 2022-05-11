import { useLocation } from "react-router-dom"
import { useState, useCallback, useEffect } from "react"

import { SendedDocs } from "../../../Components/SendedDocs/SendedDocs"
import { Loading } from "../../../Components/Loading"
import DocsService from "../../../Services/docsService"

export const UserSendedDocs = props => {

    const location = useLocation()
    const [user] = useState(location.state)
    const [sendedDocs, setSendedDocs] = useState([])
    const [loading, setLoading] = useState(false)

    const getSendedDocs = useCallback(async()=> {
        setLoading(true)
        const response = await DocsService.getSendedDocs({sender_email:user.email})
        const docs = await response.json()
        setSendedDocs(docs)
        setLoading(false)
    },[user.email])

    useEffect(()=>{
        getSendedDocs()
    },[getSendedDocs])

    return (
        loading ? <Loading/> : <SendedDocs documents={sendedDocs}/> 
    )
}