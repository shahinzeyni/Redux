console.log("object");
import ArticlesReducer from "../Redux/Articles/reducer.js" 
import CommentsReducer from "../Redux/Comments/reducer.js"
import ProductReducer from "../Redux/Products/reducer.js"

import {addArticleAction}  from "../Redux/Articles/actionCreator.js";
import { addCommentAction } from "../Redux/Comments/actionCreator.js";
import { getProductsStartAction } from "../Redux/Products/actionCreators.js";
import apiCall from "../Redux/MiddleWares/apiCall.js";

const store = Redux.createStore(
    Redux.combineReducers({
        products: ProductReducer,
        articles:ArticlesReducer,
        comments:CommentsReducer
    }),
    Redux.applyMiddleware(apiCall)
)

store.subscribe(() => console.log(`StoreUpdated:`,store.getState()))

store.dispatch(addArticleAction({ id: 1, title: "Shahin", age: 23 }));

store.dispatch(addArticleAction({id:2,title:"Mahdiye",age:23}))

store.dispatch(addCommentAction({id:1,title:"Hello",decs:"By By!"}))


store.dispatch(getProductsStartAction('https://fakestoreapi.com/products'))