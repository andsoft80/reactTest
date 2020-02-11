class Auth {

    static authenticateUser(id) {
        localStorage.setItem('id_myapp', id)
    }

    static isUserAuthenticated() {
        return localStorage.getItem('id_myapp') !== null
    }

    static deauthenticateUser() {
        localStorage.removeItem('id_myapp')
    }

    static getUserId() {
        return localStorage.getItem('id_myapp')
    }
}

export default Auth