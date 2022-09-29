import axios from "axios"

class Auth {

    constructor(){
        this.token = sessionStorage.getItem('token')

        let userData = sessionStorage.getItem('user')
        this.user = userData ? JSON.parse(userData) : null;

        if(this.token){
        axios.defaults.headers.common['Authorization'] = 'Bearer' + this.token
        }
        // this.token ? axios.defaults.headers.common['Authorization'] = 'Bearer' + this.token : null
    }

    login(token, user){
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user', JSON.stringify(user))
        axios.defaults.headers.common['Authorization'] = 'Bearer' + this.token
        this.token = token
        this.user = user
    }

    check(){
        return !!this.token
    }

    logout(){
        sessionStorage.clear()
    }

}

export default new Auth();