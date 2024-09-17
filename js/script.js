console.log("object");
import ProductReducer from "../Redux/Articles/reducer.js" 
import CommentsReducer from "../Redux/Comments/reducer.js"

import {addArticleAction}  from "../Redux/Articles/actionCreator.js";
import { addCommentAction } from "../Redux/Comments/actionCreator.js";

const store = Redux.createStore(
    Redux.combineReducers({
        products: ProductReducer,
        comments:CommentsReducer
    })
)

store.subscribe(() => console.log(`StoreUpdated:`,store.getState()))

store.dispatch(addArticleAction({ id: 1, title: "Shahin", age: 23 }));

store.dispatch(addArticleAction({id:2,title:"Mahdiye",age:23}))

store.dispatch(addCommentAction({id:1,title:"Hello",decs:"By By!"}))