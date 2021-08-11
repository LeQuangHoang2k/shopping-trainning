const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE":
      console.log("redux store");
      return state;

    default:
      return state;
  }
};
