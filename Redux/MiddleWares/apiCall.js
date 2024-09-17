import { getProductsErrorAction, getProductsSuccessAction } from "../Products/actionCreators.js"
import { getStartProduct } from "../Products/actionType.js"


const apiCall = ({dispatch}) => next => action => {
    if(action.type !== getStartProduct){
        console.log("object1");
        return next(action);
    }
    next(action)
    fetch(action.payload)
    .then(res => res.json())
    .then(data => {
        console.log("Success");
        dispatch(getProductsSuccessAction(data))
    })
    .catch(err => dispatch(getProductsErrorAction(err)))
}

export default apiCall;