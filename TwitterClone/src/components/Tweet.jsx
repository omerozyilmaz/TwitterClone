import React, { useEffect } from "react";
import UserDetails from "./UserDetails";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Tweet({ tweet }) {
  const user = tweet.core?.user_results?.result;
  const text = tweet.legacy?.full_text;
  const mediaUrl = tweet.legacy?.entities?.media?.[0]?.media_url_https;
  const createdAt = tweet.legacy?.created_at;
  const likeCount = tweet.legacy?.favorite_count;
  const retweetCount = tweet.legacy?.retweet_count;
  const replyCount = tweet.legacy?.reply_count;

  const navigate = useNavigate();

  if (!user || !text || !createdAt) return null;

  const timeAgo = moment(createdAt, "ddd MMM DD HH:mm:ss Z YYYY").fromNow();

  const handleTweetClick = () => {
    navigate(`/tweet/${tweet.entryId}`);
  };

  return (
    <div
      className="tweet"
      //onClick={handleTweetClick}
      style={{ cursor: "pointer" }}
    >
      <UserDetails user={user} timeAgo={timeAgo} />
      <p className="padding55px">{text}</p>
      <p>{tweet.id}</p>
      {mediaUrl && (
        <img src={mediaUrl} alt="Tweet media" className="padding55px" />
      )}
      <div className="tweet-stats padding55px">
        <button className="blackbg">
          <FontAwesomeIcon icon={faComment} /> {replyCount}
        </button>
        <button className="blackbg">
          <FontAwesomeIcon icon={faHeart} className="padding55px" /> {likeCount}
        </button>
        <button className="blackbg">
          <FontAwesomeIcon icon={faRetweet} className="padding55px" />{" "}
          {retweetCount}
        </button>
      </div>
    </div>
  );
}
