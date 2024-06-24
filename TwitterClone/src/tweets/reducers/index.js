import {
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_FAILURE,
} from "../types";

const initialState = {
  tweets: [],
  status: "idle",
  error: null,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        tweets: action.payload,
      };
    case FETCH_TWEETS_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tweetReducer;
