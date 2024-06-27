import axios from "axios";
import {
  SEARCH_TRENDS_REQUEST,
  SEARCH_TRENDS_SUCCESS,
  SEARCH_TRENDS_FAILURE,
} from "../types";

export const searchTrendsRequest = () => ({
  type: SEARCH_TRENDS_REQUEST,
});

export const searchTrendsSuccess = (trends) => ({
  type: SEARCH_TRENDS_SUCCESS,
  payload: trends,
});

export const searchTrendsFailure = (error) => ({
  type: SEARCH_TRENDS_FAILURE,
  payload: error,
});

export const searchTrendsTweet = () => {
  return async (dispatch) => {
    dispatch(searchTrendsRequest());
    try {
      const options = {
        method: "GET",
        url: "https://twitter135.p.rapidapi.com/v1.1/Trends/",
        params: {
          location_id: "-7608764736147602991",
          count: "20",
        },
        headers: {
          "x-rapidapi-key":
            "e089550cd5msh53ba67e093382eap198c21jsnc5fd9980a2e3",
          "x-rapidapi-host": "twitter135.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);

      const trends = response.data.timeline.instructions
        .filter((instruction) => instruction.addEntries)
        .flatMap((instruction) => instruction.addEntries.entries)
        .filter((entry) => entry.content.timelineModule)
        .flatMap((entry) => entry.content.timelineModule.items)
        .map((item) => ({
          name: item.item.content.trend.name,
          url: item.item.content.trend.url.url,
          tweet_volume:
            item.item.content.trend.trendMetadata?.metaDescription || null,
        }));

      dispatch(searchTrendsSuccess(trends));
    } catch (error) {
      dispatch(searchTrendsFailure(error.message));
    }
  };
};
