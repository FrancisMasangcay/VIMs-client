import { GET_QUOTE, PLACE_ORDER } from "../types";

const initialState = {
  currQuote: {},
  order: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        currQuote: action.payload,
      };
    case PLACE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}
