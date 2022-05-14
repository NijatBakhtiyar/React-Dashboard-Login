import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "../pages/dashboard/Dashboard.module.scss";
import Activities from "./Activities";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import CardGroups from "./CardGroups";

function Main() {
  const { username } = useSelector((state) => state.validate);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  function logout() {
    navigate("/login");
    localStorage.removeItem("login");
  }

  return (
    <main>
      <div className={styles.menuBar}>
        <span onClick={() => setShow(!show)}>
          <HiOutlineMenuAlt1 />
        </span>
      </div>
      <div className={show ? `${styles.user} ${styles.show}` : styles.user}>
        <div className={styles.task}>
          <h2>Hi {username}!</h2>
          <div className={styles.complete}>
            15% task completed
            <div>
              <span
                className={styles.percent}
                style={{ width: `${40}%` }}
              ></span>
            </div>
          </div>
        </div>
        <div className={styles.logoutBtn}>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      {/* <CardGroups /> */}
      <Activities />
    </main>
  );
}

export default Main;
