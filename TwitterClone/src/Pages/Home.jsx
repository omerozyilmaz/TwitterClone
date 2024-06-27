import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../redux/action/TweetAction";
import TweetContainer from "../components/TweetContainer";

export default function Home() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const loading = useSelector((state) => state.tweets.loading);
  const error = useSelector((state) => state.tweets.error);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  useEffect(() => {
    console.log(tweets);
  }, [tweets]);

  let content;

  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = <TweetContainer tweets={tweets} />;
  }

  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Home</h1>
        {content}
      </div>
    </div>
  );
}
