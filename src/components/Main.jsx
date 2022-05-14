/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "../pages/dashboard/Dashboard.module.scss";
import Activities from "./Activities";
import CardGroups from "./CardGroups";

function Main({ showBar }) {
  const reduxLogin = useSelector((state) => state.validate);
  const storageLogin = JSON.parse(localStorage.getItem("login"));

  const navigate = useNavigate();
  function logout() {
    navigate("/login");
    localStorage.removeItem("login");
  }

  return (
    <main>
      <div className={styles.showBar}>
        <span onClick={() => showBar("show")}>
          <HiOutlineMenuAlt1 />
        </span>
      </div>
      <div className={styles.user}>
        <div className={styles.task}>
          <h2>
            Hi{" "}
            {reduxLogin?.username
              ? reduxLogin?.username
              : storageLogin?.username}
            !
          </h2>
          <div className={styles.complete}>
            15% <span className={styles.text}>task completed</span>
            <div>
              <span
                className={styles.percent}
                style={{ width: `${15}%` }}
              ></span>
            </div>
          </div>
        </div>
        <div className={styles.logoutBtn}>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <CardGroups />
      <Activities />
    </main>
  );
}

export default Main;
