import { toBase64 } from "../globalUtils/readFile"

export const manipulateDocument = async documentPayload => {
    let document
    if(documentPayload.document.constructor.prototype === File.prototype){
        document = await toBase64(documentPayload.document)
    }
    return {...documentPayload, ...{document:document}}
}