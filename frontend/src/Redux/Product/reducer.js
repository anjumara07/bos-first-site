import {PRODUCT_DATA} from "./action";

const initState = {
    data: [],
}

export const productReducer = (store = initState, { type, payload }) => {
//   console.log(store);
  switch (type) {
    case PRODUCT_DATA:
      return { ...store, data: payload };
    default:
      return store;
  }
};
