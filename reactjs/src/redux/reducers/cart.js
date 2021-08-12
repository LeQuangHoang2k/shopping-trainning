const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT":
      state.list.push({ item: action.data });
      return state;

    default:
      return state;
  }
};
