import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import DashboardsPage from "../pages/Dashboards/DashboardsPage";
import Login from "../components/Auth/Login/Login";
import Registration from "../components/Auth/Registration/Registration";
import ConnectionsPage from "../pages/Connections/ConnectionsPage";
import FilesPage from "../pages/Files/FilesPage";
import ChartsPage from "../pages/Charts/СhartsPage";
import WikiPage from "../pages/Wiki/WikiPage";
import CommunityPage from "../pages/Community/CommunityPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import Feedback from "../pages/Feedback/Feedback"

const RoutesConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "user/loadFromLocalStorage" });
  }, [dispatch]);

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
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};

export default RoutesConfig;
