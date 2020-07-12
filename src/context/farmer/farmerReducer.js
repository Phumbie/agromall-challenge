import { GET_FARMERS, GET_FARMER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_FARMERS:
      return {
        ...state,
        farmers: action.payload,
      };
    case GET_FARMER:
      return {
        ...state,
        farmer: state.farmers.find((farmer) => farmer.farmer_id === action.payload),
      };
    default:
      return state;
  }
};
