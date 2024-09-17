import { addComment,removeComment } from "./actionTypes.js";

export default (state = [],action) => {
    switch (action.type) {
        case addComment:
            let newComment = action.payload
            return [...state,newComment]
        case removeComment:
            let newState = [...state].filter(item => item.id !== action.id)
            return newState    
        default:
            return state
    }
}