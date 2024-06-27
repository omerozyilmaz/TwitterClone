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

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/premium" element={<Premium />} />
            </Routes>
          </div>
          <RightSidebar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
