import { CLEAR_ERRORS, LOADING_UI, GET_QUOTE } from "../types";

import axios from "axios";

export const lookup = (requestData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/lookup", requestData)
    .then((res) => {
      dispatch({ type: GET_QUOTE, payload: { ...res.data } });
      dispatch({ type: CLEAR_ERRORS });
      history.push("/order");
    })
    .catch((err) => console.log("error response data, ", err.response.data));
};
