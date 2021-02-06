import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  GET_QUOTE,
  PLACE_ORDER,
} from "../types";

import axios from "axios";
import { getUserData } from "./userActions";

export const lookup = (requestData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/lookup", requestData)
    .then((res) => {
      dispatch({ type: GET_QUOTE, payload: { ...res.data } });
      dispatch({ type: CLEAR_ERRORS });
      history.push("/order");
    })
    .catch((err) => {
      let error;
      if (err.response && err.response.data) error = err.response.data;
      else error = err;
      dispatch({ type: SET_ERRORS, payload: error });
    });
};

export const placeOrder = (requestData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  console.log(requestData);
  axios
    .post("/order", requestData)
    .then((res) => {
      dispatch({ type: PLACE_ORDER, payload: { ...res.data } });
      dispatch(updateInfo());
      history.push("/order-status");
    })
    .catch((err) => {
      let error;
      if (err.response && err.response.data) error = err.response.data;
      else error = err;
      dispatch({ type: SET_ERRORS, payload: error });
    });
};

export const updateInfo = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/updateInfo")
    .then(() => {
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => console.log(err));
};
