const state = {
  cart: [],
};

export const catReducer = (state, action) => {
  switch (action.type) {
    case "STORE":
      console.log("redux store");
      break;

    default:
      break;
  }
};
