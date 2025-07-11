let initialState = {
  cartData: [],
};
export const Product_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      if (state.cartData.length == 0) {
        action.payload["quan"] = 1;
        return { ...state, cartData: [...state.cartData, action.payload] };
      }
      let isTrue = false;
      for (let i = 0; i < state.cartData.length; i++) {
        if (state.cartData[i].id == action.payload.id) {
          isTrue = true;
          state.cartData[i]["quan"]++;
          break;
        } else {
          if (action.payload["quan"]) {
            continue;
          } else {
            action.payload["quan"] = 1;
          }
        }
      }
      if (isTrue == true) {
        return { ...state, cartData: [...state.cartData] };
      } else {
        return { ...state, cartData: [...state.cartData, action.payload] };
      }
    case "Remove_To_Cart":
      let data = state.cartData.filter((ele) => {
        if (ele.id !== action.payload) {
          return ele;
        }
      });
      return {
        ...state,
        cartData: data,
      };
    case "Single_Remove_To_Cart":
      let data1 = state.cartData.filter((ele) => {
        if (ele.id == action.payload) {
          if (ele["quan"] > 1) {
            ele["quan"]--;
          }
        }
        return ele;
      });
      return { ...state, cartData: data1 };
    default:
      return state;
  }
};
