import React from "react";

const UserDetails = (props) => {
  const { user, timeAgo } = props;
  return (
    <div className="user-details">
      <img
        src={user.legacy.profile_image_url_https}
        alt="User profile"
        className="profile-image"
      />
      <div>
        <h2>{user.legacy.name}</h2>
        <p className="user-info">
          @{user.legacy.screen_name} · {timeAgo}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
