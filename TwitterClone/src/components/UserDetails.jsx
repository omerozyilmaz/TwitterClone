import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <img
        src={user.legacy.profile_image_url_https}
        alt="User profile"
        className="profile-image"
      />
      <div>
        <h2>{user.legacy.name}</h2>
        <p>@{user.legacy.screen_name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
