
class AuthService {
    static async login(email, password){
        
        const response = await fetch("http://localhost:5000/auth/login",{
            method: "POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: new URLSearchParams({
                email:email,
                password:password
            }),
            
            mode:"cors",
        })
        
        return response
    }
}

export default AuthService