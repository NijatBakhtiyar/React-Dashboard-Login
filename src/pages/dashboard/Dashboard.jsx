import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import AdminLayouts from "../../routes/AdminLayouts";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <AdminLayouts>
      <div className={styles.dashboardPage}>
        <Navbar />
        <Main />
      </div>
    </AdminLayouts>
  );
}

export default Dashboard;
