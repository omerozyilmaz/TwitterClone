import React from "react";
import Tweet from "../components/Tweet";
export default function Home() {
  const sampleTweet = {
    user: {
      name: "John Doe",
      handle: "johndoe",
      profileImage: "https://via.placeholder.com/48",
    },
    content: "This is a sample tweet to demonstrate the tweet container.",
    date: "2h ago",
  };
  return (
    <div>
      <h2>Home</h2>
      <Tweet tweet={sampleTweet} />
    </div>
  );
}
