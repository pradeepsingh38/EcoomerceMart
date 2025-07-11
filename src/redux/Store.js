import { createStore } from "redux";
import { reducer } from "./CombineReducer";
export const Store = createStore(reducer, {});
