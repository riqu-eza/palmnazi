import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./Dashboard.css"; // Import CSS file for styling
import Blog from "./blogadmin";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome Admin</h1>
      <div className="dashboard-tabs">
        <Link to="/blogadmin" className="dashboard-tab">
          Create Blog Posts
        </Link>
      </div>
      <div className="dashboard-content">
        <Routes>
          {" "}
          <Route path="/blogadmin" component={Blog} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
