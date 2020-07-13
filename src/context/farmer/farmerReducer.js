import { GET_FARMERS, GET_FARMER, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_FARMERS:
      return {
        ...state,
        farmers: action.payload.farmers,
        baseImageUrl: action.payload.imageBaseUrl,
        loading: false,
      };
    case GET_FARMER:
      return {
        ...state,
        farmer: state.farmers.find((farmer) => farmer.farmer_id === action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
