export default (state = null, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER":
            return action.users
        default:
            return state
    }
}