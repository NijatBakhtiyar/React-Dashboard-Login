import React, { useState } from "react";

import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import AdminLayouts from "../../routes/AdminLayouts";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  const [show, setShow] = useState(false);
  function showBar(event) {
    if (event === "close") {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <AdminLayouts>
      <div className={styles.dashboardPage}>
        <Navbar
          show={show}
          showBar={showBar}
        />
        <Main showBar={showBar} />
      </div>
    </AdminLayouts>
  );
}

export default Dashboard;
