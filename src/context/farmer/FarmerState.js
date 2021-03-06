import React, { useReducer } from "react";
import axios from "axios";
import FarmerContext from "./farmerContext";
import FarmerReducer from "./farmerReducer";
import { GET_FARMERS, GET_FARMER, SET_LOADING } from "../types";

const FarmerState = (props) => {
  const initialState = {
    farmers: [],
    farmer: {},
    baseImageUrl: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(FarmerReducer, initialState);

  const getFarmers = async () => {
    setLoading();
    // console.log(initialState.loading);
    try {
      const res = await axios.get(`https://theagromall.com/api/v2/get-sample-farmers?limit=100`);
      //   initialState.baseImageUrl = res.data.data.imageBaseUrl;
      dispatch({
        type: GET_FARMERS,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getFarmer = (id) => {
    setLoading();
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
        loading: state.loading,
        getFarmers,
        getFarmer,
      }}
    >
      {props.children}
    </FarmerContext.Provider>
  );
};

export default FarmerState;
