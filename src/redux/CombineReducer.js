import { combineReducers } from "redux";
import { Product_reducer } from "./ReducerFunction";
export const reducer = combineReducers({
  Product_Data: Product_reducer,
});
