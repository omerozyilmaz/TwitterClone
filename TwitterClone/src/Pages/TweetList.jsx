import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";

const TweetList = () => {
  const { tweets, loading, error } = useSelector((state) => state);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Tweets</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.entryId}>
            <Tweet tweet={tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
