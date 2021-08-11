const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT":
      console.log("redux store", action.data);
      state.list.push({ item: action.data });

      return state;

    default:
      return state;
  }
};
