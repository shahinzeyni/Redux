console.log("object");
import ProductReducer from "../Redux/Articles/reducer.js" 

import {addArticleAction}  from "../Redux/Articles/actionCreator.js";




const store = Redux.createStore(
    Redux.combineReducers({
        products: ProductReducer
    })
)

store.dispatch(addArticleAction({ id: 1, title: "Shahin", age: 23 }));

store.dispatch(addArticleAction({id:2,title:"Mahdiye",age:23}))



console.log(store.getState());
console.log("object");



