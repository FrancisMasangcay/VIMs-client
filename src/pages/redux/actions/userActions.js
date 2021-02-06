import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
} from "../types";

import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch(getUserData());
      history.push("/profile");
    })
    .catch((err) => {
      let error;
      if (err.response && err.response.data) error = err.response.data;
      else error = err;
      dispatch({ type: SET_ERRORS, payload: error });
    });
};
export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      dispatch(getUserData());
      history.push("/profile");
    })
    .catch((err) => {
      let error;
      if (err.response && err.response.data) error = err.response.data;
      else error = err;
      dispatch({ type: SET_ERRORS, payload: error });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => console.log(err));
};
