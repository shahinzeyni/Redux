import { addProduct,removeProduct,getErrorProduct,getStartProduct,getSuccessProduct } from "../Products/actionType.js"

const addProuctAction = (data) => {
    return{
        type:addProduct,
        payload:data
    }
}

const removeProductAction = (id) => {
    return {
      type: removeProduct,
      id,
    };
  };


  const getProductsStartAction = (url) => {
    return {
      type: getStartProduct,
      payload: url,
    };
  };
  
  const getProductsSuccessAction = (data) => {
    return {
      type: getSuccessProduct,
      payload: data,
    };
  };
  
  const getProductsErrorAction = (error) => {
    return {
      type: getErrorProduct,
      payload: error,
    };
  };

  export {
    addProuctAction,
    removeProductAction,
    getProductsStartAction,
    getProductsSuccessAction,
    getProductsErrorAction,
    
  };
  