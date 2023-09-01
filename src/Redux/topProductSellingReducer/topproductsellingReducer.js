import { TOP_PRODUCT_SELLING_FAILURE, TOP_PRODUCT_SELLING_REQUEST, TOP_PRODUCT_SELLING_SUCCESS } from "./acitonType";

const initialValue = {
    isLoading : false,
    isError  : false,
    topsellingProducts : [],
}


export const reducer=(state=initialValue,action)=>{
    const {type,payload} = action;
    switch(type){
        case TOP_PRODUCT_SELLING_REQUEST: return {...state , isLoading : true};
        case TOP_PRODUCT_SELLING_SUCCESS: return {...state , isLoading : false , topsellingProducts : payload};
        case TOP_PRODUCT_SELLING_FAILURE: return {...state , isLoading : false , isError : true};
        default : return state;
    }
}