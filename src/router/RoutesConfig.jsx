import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardsPage from "../pages/Dashboards/DashboardsPage";
import Login from "../components/Auth/Login/Login";
import Registration from "../components/Auth/Registration/Registration";
import ConnectionsPage from "../pages/Connections/ConnectionsPage";
import FilesPage from "../pages/Files/FilesPage";
import ChartsPage from "../pages/Charts/СhartsPage";
import WikiPage from "../pages/Wiki/WikiPage";
import BestPracticesPage from "../pages/BestPractices/BestPracticesPage";
import CommunityPage from "../pages/Community/CommunityPage";
import ProfilePage from "../pages/Profile/ProfilePage";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<DashboardsPage />} />
      <Route path="/connections" element={<ConnectionsPage />} />
      <Route path="/files" element={<FilesPage />} />
      <Route path="/charts" element={<ChartsPage />} />
      <Route path="/wiki" element={<WikiPage />} />
      <Route path="/best_practices" element={<BestPracticesPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default RoutesConfig;
