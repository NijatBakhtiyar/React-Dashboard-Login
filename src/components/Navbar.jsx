/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsCalendar2, BsClock, BsListTask } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { HiOutlineInbox } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Profile from "../images/profile.jpg";
import styles from "../pages/dashboard/Dashboard.module.scss";

function Navbar({ show, showBar }) {
  const { page } = useParams();
  const reduxLogin = useSelector((state) => state.validate);
  const storageLogin = JSON.parse(localStorage.getItem("login"));

  return (
    <nav className={show ? styles.show : ""}>
      <div className={styles.closeBar}>
        <span onClick={() => showBar("close")}>
          <GrClose />
        </span>
      </div>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img
            src={Profile}
            alt="profile"
          />
        </div>
        <div className={styles.info}>
          <h2>
            {reduxLogin?.username
              ? reduxLogin?.username
              : storageLogin?.username}
          </h2>
          <p>Sr. Visual Designer</p>
        </div>
      </div>
      <h6>Menu</h6>
      <ul>
        <li>
          <Link
            to="/dashboard/tasks"
            className={page === "tasks" ? styles.active : ""}
          >
            <p>
              <HiOutlineInbox />
              My Tasks
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/inbox"
            className={page === "inbox" ? styles.active : ""}
          >
            <p>
              <BiMessageRoundedDetail />
              Inbox
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/projects"
            className={page === "projects" ? styles.active : ""}
          >
            <p>
              <BsListTask />
              Projects
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/standups"
            className={page === "standups" ? styles.active : ""}
          >
            <p>
              <BsClock />
              Standups
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/meetings"
            className={page === "meetings" ? styles.active : ""}
          >
            <p>
              <BsCalendar2 />
              Meetings
            </p>
            <span className={styles.messageCount}>5</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/settings"
            className={page === "settings" ? styles.active : ""}
          >
            <p>
              <GoSettings />
              Settings
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
