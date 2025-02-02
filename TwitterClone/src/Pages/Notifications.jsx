import React from "react";
import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Notifications</h1>
        <p>Here are your notifications.</p>
      </div>
    </div>
  );
}
