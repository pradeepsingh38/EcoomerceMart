import { Action_Type } from "./ActionType";
export const add_to_cart = (product) => {
  return { type: Action_Type.Add_To_Cart, payload: product };
};
export const remove_from_cart = (id) => {
  return { type: Action_Type.Remove_To_Cart, payload: id };
};
export const single_remove_to_cart = (id) => {
  return { type: Action_Type.Single_Remove_To_Cart, payload: id };
};
