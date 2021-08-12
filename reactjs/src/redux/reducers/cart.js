const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      console.log("a", action.data.cart);
      return {
        ...state,
        list: action.data.cart,
      };

    default:
      return state;
  }
};
