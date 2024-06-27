import {
  SEARCH_TRENDS_REQUEST,
  SEARCH_TRENDS_SUCCESS,
  SEARCH_TRENDS_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  trends: [],
  error: "",
};

const trendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TRENDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_TRENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        trends: action.payload || [],
        error: "",
      };
    case SEARCH_TRENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default trendReducer;
