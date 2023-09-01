import { PRICE_LEVEL_FAILURE, PRICE_LEVEL_REQUEST, PRICE_LEVEL_SUCCESS } from "./actionType";


const initialState = {
    priceLevel : [],
    isLoading : false,
    isError : false,
}

export const priceLevelReducer =(state=initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case PRICE_LEVEL_REQUEST : return { ...state , isLoading : true  };
        case PRICE_LEVEL_SUCCESS : return { ...state , isLoading : false , priceLevel : payload , };
        case PRICE_LEVEL_FAILURE : return { ...state , isLoading : false , isError : true };
        default : return state;
    }
}

