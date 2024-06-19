import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page.</p>
      <div>
        <button onClick={() => navigate("/messages")}>Go to Messages</button>
      </div>
      <div>
        <button onClick={() => navigate("/notifications")}>
          Go to Notifications
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/profile")}>Go to Profile</button>
      </div>
    </div>
  );
}
