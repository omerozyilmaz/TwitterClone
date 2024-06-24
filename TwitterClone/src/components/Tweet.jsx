import React from "react";
import UserDetails from "./UserDetails";

const Tweet = ({ tweet }) => {
  const user = tweet.core?.user_results?.result;
  const text = tweet.legacy?.full_text;
  const mediaUrl = tweet.legacy?.entities?.media?.[0]?.media_url_https;

  if (!user || !text) return null;

  return (
    <div className="tweet">
      <UserDetails user={user} />
      <p>{text}</p>
      {mediaUrl && <img src={mediaUrl} alt="Tweet media" />}
    </div>
  );
};

export default Tweet;
