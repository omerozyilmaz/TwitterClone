import axios from "axios";
import {
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_FAILURE,
} from "../types";

export const fetchTweetsRequest = () => ({
  type: FETCH_TWEETS_REQUEST,
});

export const fetchTweetsSuccess = (tweets) => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: tweets,
});

export const fetchTweetsFailure = (error) => ({
  type: FETCH_TWEETS_FAILURE,
  payload: error,
});

export const fetchTweets = () => {
  return async (dispatch) => {
    dispatch(fetchTweetsRequest());
    try {
      const options = {
        method: "GET",
        url: "https://twitter135.p.rapidapi.com/v2/ListTimeline/",
        params: {
          list_id: "875371355570487296",
          count: "20",
        },
        headers: {
          "x-rapidapi-key":
            "f9ce061a33msh30fade5f94282e5p1a95c1jsn04935aa0af20zz",
          "x-rapidapi-host": "twitter135.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      const entries =
        response.data.data.list.tweets_timeline.timeline.instructions[0]
          .entries;
      dispatch(fetchTweetsSuccess(entries));
    } catch (error) {
      dispatch(fetchTweetsFailure(error.message));
    }
  };
};
