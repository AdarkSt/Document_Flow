import { useLocation } from "react-router-dom"
import React, { useState, useCallback, useEffect } from "react"

import { ResavedDocs } from "../../../Components/ResavedDocs/ResavedDocs"
import { Loading } from "../../../Components/Loading/Loading"
import DocsService from "../../../Services/docsService"
import _keys from "lodash/keys"
import { toast } from "react-toastify"

export const UserResavedDocs = React.memo(props => {
    const location = useLocation()
    const [user] = useState(location.state)
    const [resavedDocs, setResavedDocs] = useState([])
    const [loading, setLoading] = useState(false)

    const getUserResavedDocs = useCallback(async()=> {
        setLoading(true)
        const response = await DocsService.getResavedDocs({email: user.email})
        const docs = await response.json()
        setResavedDocs(docs)
        setLoading(false)
    },[user.email])

    useEffect(()=>{
        getUserResavedDocs()

        const intervalId = setInterval(()=> {getUserResavedDocs()}, 1800000)
        
        return ()=> {
            clearInterval(intervalId)
        }
    },[getUserResavedDocs])

    const handleAccept = async (currentDocument, document_id) => {
        let error = false
        try{
            let accepterIndexKey = ""
            for (const key of _keys(currentDocument)){
                if(currentDocument[key] === user.email){
                    accepterIndexKey = key
                }
            }
            if(accepterIndexKey) {
                const accepterIndex = accepterIndexKey.slice(0, 10)
                const accepterIndexAnswer = accepterIndex + "_answer"
                const accepterIndexSeen = accepterIndex + "_seen"
                const seenStep = currentDocument.seenStep + 1
                currentDocument[accepterIndexAnswer] = true
                currentDocument[accepterIndexSeen] = true
                currentDocument.seenStep = seenStep
                currentDocument.denied = false
                const res = await DocsService.updateDoc({doc: currentDocument, email:user.email})
            }
            
        } catch (err) {
            error = true
            toast.error("Գործողությունը խափանված է")
        }
        if(!error) {
            toast.success("Հաջողությամբ կատարված է")
            getUserResavedDocs()
        }
    }

    const handleCancel = async (currentDocument, document_id) => {
        let error = false
        try{
            let accepterIndexKey = ""
            for (const key of _keys(currentDocument)){
                if(currentDocument[key] === user.email){
                    accepterIndexKey = key
                }
            }
            if(accepterIndexKey) {
                const accepterIndex = accepterIndexKey.slice(0, 10)
                const accepterIndexAnswer = accepterIndex + "_answer"
                const accepterIndexSeen = accepterIndex + "_seen"
                const seenStep = currentDocument.seenStep + 1
                currentDocument[accepterIndexAnswer] = false
                currentDocument[accepterIndexSeen] = true
                currentDocument.seenStep = seenStep
                currentDocument.denied = Boolean(1)
                currentDocument.step = 3 
                const res = await DocsService.updateDoc({doc: currentDocument, email:user.email})
            }
        } catch (err) {
            error = true
            toast.error("Գործողությունը խափանված է")
        }
        if(!error) {
            toast.success("Հաջողությամբ կատարված է")
            getUserResavedDocs()
        }
    }

    return(
        loading ? <Loading/> : <ResavedDocs handleAccept={handleAccept} handleCancel={handleCancel} documents={resavedDocs}/>
    )
}, )
