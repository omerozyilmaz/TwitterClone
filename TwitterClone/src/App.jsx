import "./App.css";
import Sidebar from "./Layout/SideBar";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Notifications from "./Pages/Notifications";
import ProfilePage from "./Pages/ProfilePage";
import Explore from "./Pages/Explore";
import Communities from "./Pages/Communities";
import Premium from "./Pages/Premium";
import RightSidebar from "./Layout/RightSideBar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/register" || location.pathname === "/login";
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Provider store={store}>
      {" "}
      <div className="app">
        {!isAuthRoute && <Sidebar />}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/logins" />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/messages"
              element={
                isAuthenticated ? <Messages /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/notifications"
              element={
                isAuthenticated ? <Notifications /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/explore"
              element={isAuthenticated ? <Explore /> : <Navigate to="/login" />}
            />
            <Route
              path="/communities"
              element={
                isAuthenticated ? <Communities /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/premium"
              element={isAuthenticated ? <Premium /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        {!isAuthRoute && <RightSidebar />}
      </div>
    </Provider>
  );
}

export default App;
