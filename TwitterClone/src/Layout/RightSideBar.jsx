import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTrendsTweet } from "../redux/action/TrendAction";

export default function RightSidebar() {
  const dispatch = useDispatch();
  const trendsData = useSelector((state) => state.trends);

  useEffect(() => {
    dispatch(searchTrendsTweet());
  }, [dispatch]);

  if (trendsData.loading) {
    return <p>Loading...</p>;
  }

  if (trendsData.error) {
    return <p>{trendsData.error}</p>;
  }

  return (
    <div className="right-sidebar">
      <div className="premium">
        <h2>Premium'a Abone Ol</h2>
        <p>
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
          geliri payı kazan.
        </p>
        <button className="subscribe-button">Abone ol</button>
      </div>
      <div className="trends">
        <h3>İlgini çekebilecek gündemler</h3>
        <ul>
          {trendsData.trends && trendsData.trends.length > 0 ? (
            trendsData.trends.map((trend, index) => (
              <li key={index}>
                <a href={trend.url} target="_blank" rel="noopener noreferrer">
                  {trend.name}
                </a>
                <span>
                  {trend.tweet_volume ? `${trend.tweet_volume} posts` : ""}
                </span>
              </li>
            ))
          ) : (
            <p>No trends available</p>
          )}
        </ul>
      </div>
      <div className="who-to-follow">
        <h3>Kimi takip etmeli</h3>
      </div>
    </div>
  );
}
