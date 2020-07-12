import React, { useReducer } from "react";
import axios from "axios";
import FarmerContext from "./farmerContext";
import FarmerReducer from "./farmerReducer";
import { GET_FARMERS, GET_FARMER } from "../types";

const FarmerState = (props) => {
  const initialState = {
    farmers: [],
    farmer: {},
    baseImageUrl: "",
  };
  const [state, dispatch] = useReducer(FarmerReducer, initialState);

  const getFarmers = async () => {
    console.log("inside get armers method");
    try {
      const res = await axios.get(`https://theagromall.com/api/v2/get-sample-farmers?limit=12`);
      initialState.baseImageUrl = res.data.data.imageBaseUrl;
      dispatch({
        type: GET_FARMERS,
        payload: res.data.data.farmers,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getFarmer = (id) => {
    dispatch({
      type: GET_FARMER,
      payload: id,
    });
  };

  return (
    <FarmerContext.Provider
      value={{
        farmers: state.farmers,
        farmer: state.farmer,
        baseImageUrl: state.baseImageUrl,
        getFarmers,
        getFarmer,
      }}
    >
      {props.children}
    </FarmerContext.Provider>
  );
};

export default FarmerState;
