const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


const loginRequest = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

const logoutRequest = () => {
    return {
        type: LOGOUT
    }
}

export { logoutRequest , loginRequest , LOGIN , LOGOUT };