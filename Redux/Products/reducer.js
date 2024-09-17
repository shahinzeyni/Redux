import { addProduct,removeProduct,getErrorProduct,getStartProduct,getSuccessProduct } from "./actionType.js";


export default (state = [], action) => {
    switch (action.type) {
      case addProduct: {
        newProduct = action.payload;
        return [...state, newProduct];
      }
      case removeProduct: {
        let removeProduct = [...state].filter((item) => item.id !== action.id);
        return removeProduct;
      }
      case getSuccessProduct: {
        return [...state, ...action.payload];
      }
      case getErrorProduct:{
        return [...state,{error:action.payload}]
      }
      default: {
        return state;
      }
    }
} 
