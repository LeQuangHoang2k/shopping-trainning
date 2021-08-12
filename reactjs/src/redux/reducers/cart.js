const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT":
      console.log("a", action.data.cart);
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
