/*import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTweet } from "../tweets/actions/index";
import { useParams } from "react-router-dom";

const TweetDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tweet = useSelector((state) => state.tweets.selectedTweet); // `state.tweets.selectedTweet` olmalı

  useEffect(() => {
    dispatch(selectTweet(id));
  }, [dispatch, id]);

  const tweetContent = tweet.legacy;

  return (
    <div>
      <h1>{tweetContent.full_text}</h1>
      <p>{tweetContent.created_at}</p>
      <p>ß{tweetContent.user?.name}</p>
      {tweetContent.entities?.media &&
        tweetContent.entities.media.map((media, index) => (
          <img key={index} src={media.media_url_https} alt="tweet media" />
        ))}
    </div>
  );
};

export default TweetDetail;
*/
