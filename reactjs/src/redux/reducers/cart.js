const initialState = {
  list: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartReducer = (state = initialState, action) => {
  const { list } = state;

  switch (action.type) {
    case "UPDATE": {
      console.log("redux :", action.data.cart);
      return {
        ...state,
        list: action.data.cart,
      };
    }

    case "UP_COUNT": {
      const { item } = action.data;
      var index = list.findIndex(
        (element) => element.product_id === item.product_id
      );

      list[index].count += 1;

      localStorage.setItem("cart", JSON.stringify(list));

      // console.log("up", item);
      // console.log("index", index);
      console.log("redux :", list);
    }

    case "DOW_COUNT":
      const { item } = action.data;
      var index = list.findIndex(
        (element) => element.product_id === item.product_id
      );

      list[index].count -= 1;

      localStorage.setItem("cart", JSON.stringify(list));

      return {
        ...state,
        list: list,
      };

    default:
      return state;
  }
};
