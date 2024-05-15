import {httpClient} from "../config/api/axios.ts";

export function register(lastname, password, email, firstname) {
   return httpClient.post('/register', {
        lastname: lastname,
        password: password,
        email: email,
        firstname: firstname,
    })
}

export function login(email, password) {
    return httpClient.post('/login', {
        email: email,
        password: password
    })
}