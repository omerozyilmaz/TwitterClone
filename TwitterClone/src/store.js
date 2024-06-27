import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import tweetReducer from "./redux/reducer/TweetReducer";
import trendReducer from "./redux/reducer/TrendReducer";

const rootReducer = combineReducers({
  tweets: tweetReducer,
  trends: trendReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
