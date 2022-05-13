import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayouts from "../../routes/AdminLayouts";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <AdminLayouts>
      <div className={styles.dashboardPage}>Dashboard</div>
    </AdminLayouts>
  );
}

export default Dashboard;
