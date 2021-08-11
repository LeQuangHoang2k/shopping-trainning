const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || 0,
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
