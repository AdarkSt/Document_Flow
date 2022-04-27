import { http_GetRequest, http_DeleteRequest, http_PostRequest, http_PatchRequest } from "../Utils/appBasedUtils/http_request";

export const createDocument = async(document) => {
    const body = JSON.stringify(document)
    const response = await http_PostRequest(`/documents`,body)
    return response
}

export const getResaverDocuments = async({resaver_first_name = 1, resaver_last_name = 20, resaver_position}) => {
    
    const response = await http_GetRequest(`/documents?resaiver_first_name=${resaver_first_name}&resaiver_last_name=${resaver_last_name}&resaiver_position=${resaver_position}`)
    return {
        data: response.data,
        count: response.headers.get("X-Total-Count"),
        status: response.status
    }
}

export const getSenderDocuments = async({first_name = 1, last_name = 20, position}) => {
    
    const response = await http_GetRequest(`/documents?first_name=${first_name}&last_name=${last_name}&position=${position}`)
    return {
        data: response.data,
        count: response.headers.get("X-Total-Count"),
        status: response.status
    }
}


export const getDocument = async(id) => {
    const response = await http_GetRequest(`/documents/${id}`)
    return response
}

export const updateDocument = async(document, id) => {
    const body = JSON.stringify(document)
    const response = await http_PatchRequest(`/documents/${id}`, body)
    return response
}

export const deleteDocument = async(id) =>{
    const response = await http_DeleteRequest(`/documents/${id}`)
    return response
}