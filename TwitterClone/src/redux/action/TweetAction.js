import axios from "axios";
export const FETCH_TWEETS_REQUEST = "FETCH_TWEETS_REQUEST";
export const FETCH_TWEETS_SUCCESS = "FETCH_TWEETS_SUCCESS";
export const FETCH_TWEETS_FAILURE = "FETCH_TWEETS_FAILURE";

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
            "869ec4e5f0msh57b1906e4c875fcp15ce11jsn3387d8f396ae",
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
