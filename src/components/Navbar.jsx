import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../pages/dashboard/Dashboard.module.scss";
import { HiOutlineInbox } from "react-icons/hi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsCalendar2 } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import Profile from "../images/profile.jpg";

function Navbar() {
  const { page } = useParams();

  return (
    <nav>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src={Profile} alt="profile" />
        </div>
        <div className={styles.info}>
          <h2>AR Shakir</h2>
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
