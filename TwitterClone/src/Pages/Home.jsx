import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../tweets/actions";
import TweetContainer from "../components/TweetContainer";

const Home = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const tweetStatus = useSelector((state) => state.tweets.status);
  const error = useSelector((state) => state.tweets.error);

  useEffect(() => {
    if (tweetStatus === "idle") {
      dispatch(fetchTweets());
    }
  }, [tweetStatus, dispatch]);

  useEffect(() => {
    console.log(tweets);
  }, [tweets]);

  let content;

  if (tweetStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (tweetStatus === "succeeded") {
    content = <TweetContainer tweets={tweets} />;
  } else if (tweetStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      {content}
    </div>
  );
};

export default Home;
