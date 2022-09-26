const getAuth = ()=>{
    let access_key =  sessionStorage.getItem('authorization_key')
    if (access_key) {
        let authData = {
            'key' : access_key
        }
        return authData
    } else {
        return false
    }
}

export default getAuth