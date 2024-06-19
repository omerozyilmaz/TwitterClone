import React from "react";

export default function Messages() {
  return (
    <div>
      <div>
        <h1>Messages</h1>
        <p>Here are your messages.</p>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
}
