import React from "react";
import Tweet from "./Tweet";

export default function TweetContainer({ tweets }) {
  return (
    <div className="tweet-container">
      {tweets.map((tweet) => {
        const tweetResult = tweet.content?.itemContent?.tweet_results?.result;
        return tweetResult ? (
          <Tweet key={tweet.entryId} tweet={tweetResult} />
        ) : null;
      })}
    </div>
  );
}
