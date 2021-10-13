function usersReducer(state, action) {
    
    switch(action.type) {
        case "CREATE_USER": {
            return { username: action.payload.newUsername };
        }
        case "LOGIN_USER": {
            return { 
                username: action.payload.loginUsername,
                isLogin: true
                };
        }
        case "LOGOUT_USER": {
            return {
                username: "",
                isLogin: false
            }
        }
        default:
            return state;
    } 
}