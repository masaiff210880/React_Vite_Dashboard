import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "../Redux/productReducer/reducer";
import { reducer as userReducer } from "./userReducer/reducer";
import { priceLevelReducer } from "./priceLevelReducer/reducer";
import { reducer as topseelingproudctRedeucer } from "./topProductSellingReducer/topproductsellingReducer";
// import {reducer as salesReducer} from "./salesReducer/reducer"
// import { vendorReducer } from './vendorReducer/reducer';
// import { contactReducer } from './contactReducer/reducer';
// import { purchaseReducer } from './purchaseReducer/reducer';
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  userReducer,
  productReducer,
  priceLevelReducer,
  topseelingproudctRedeucer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
