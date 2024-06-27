import {
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  tweets: [],
  error: "",
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload,
        error: "",
      };
    case FETCH_TWEETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tweetReducer;
