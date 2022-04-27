class UsersService {
    static async getUsers(){
        
        const response = await fetch("http://localhost:5000/users/get_users",{
            method: "GET",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },            
            mode:"cors",
        })
        
        return response
    }

    static async updateUser(user) {
        const response = await fetch("http://localhost:5000/users/update_user",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: new URLSearchParams(user),
            mode:"cors",
        })

        return response
    }

    static async deleteUser(user) {
        const response = await fetch("http://localhost:5000/users/delete_user",{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: new URLSearchParams(user),
            mode:"cors",
        })

        return response
    }

    static async createUser(user) {
        const response = await fetch("http://localhost:5000/users/create_user",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: new URLSearchParams(user),
            mode:"cors",
        })
        
        return response
    }
}

export default UsersService