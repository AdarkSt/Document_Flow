import { useLocation } from "react-router-dom"
import { useState, useCallback, useEffect } from "react"

import { getSenderDocuments } from "../../../Services/documentService"

import { SendedDocs } from "../../../Components/SendedDocs/SendedDocs"
import { Loading } from "../../../Components/Loading"

export const UserSendedDocs = props => {

    const location = useLocation()
    const [user] = useState(location.state)
    const [sendedDocs, setSendedDocs] = useState([])
    const [loading, setLoading] = useState(false)

    const getSendedDocs = useCallback(async()=> {
        setLoading(true)
        const response = await getSenderDocuments({
            first_name:user.first_name,
            last_name:user.last_name,
            position:user.position
        })
        const docs = response.data
        setSendedDocs(docs)
        setLoading(false)
    },[user.first_name, user.last_name, user.position])

    useEffect(()=>{
        getSendedDocs()
    },[getSendedDocs])

    return (
        loading ? <Loading/> : <SendedDocs documents={sendedDocs}/> 
    )
}