import axios from 'axios';

class Auth {
    constructor() {
        this.isAuthenticated = false;
    }

    login(login, password, resolve, reject) {
        axios.post('api/login', {
            login: login,
            password: password
        })
        .then(response => {
            const token = response.data.accessToken;
            localStorage.setItem('token', token);
            this.isAuthenticated = true;
            resolve();
        })
        .catch(err => {
            reject(err);
        })
    }

    logout(cb) {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.isAuthenticated;
    }
}

export default new Auth();