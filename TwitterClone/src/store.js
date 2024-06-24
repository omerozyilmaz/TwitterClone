import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import tweetReducer from "./tweets/reducers";

const rootReducer = combineReducers({
  tweets: tweetReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
