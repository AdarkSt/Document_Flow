class DocsService {
    static async getResavedDocs(email){
        
        const response = await fetch("http://localhost:5000/docs/get_resaved_docs",{
            method: "POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },       
            body: new URLSearchParams(email),     
            mode:"cors",
        })
        
        return response
    }

    static async updateDoc(data) {
        const response = await fetch("http://localhost:5000/docs/update_docs",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: new URLSearchParams({
                doc: JSON.stringify(data.doc),
                email: data.email
            }),
            mode:"cors",
        })

        return response
    }

    static async getSendedDocs(sender_email) {
        const response = await fetch("http://localhost:5000/docs/get_sended_docs",{
            method: "POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },       
            body: new URLSearchParams(sender_email),     
            mode:"cors",
        })
        
        return response
    }

    static async createDocs(document) {
        const response = await fetch("http://localhost:5000/docs/create_doc",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: new URLSearchParams(document),
            mode:"cors",
        })
        
        return response
    }
}

export default DocsService