import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsCalendar2, BsClock, BsListTask } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { HiOutlineInbox } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Profile from "../images/profile.jpg";
import styles from "../pages/dashboard/Dashboard.module.scss";
import { getUsers } from "../redux/users";

function Navbar() {
  const { page } = useParams();
  const { username } = useSelector((state) => state.validate);
  // console.log(result);
  // useSelector((state) => console.log(state.users));
  // result?.then((res) => console.log(res));

  // console.log(result);
  // const addTodoAsync = async () => {
  //   try {
  //     // console.log(data);
  //     const { data } = await axios(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     // console.log(response);
  //     return data;
  //     // dispatch(users(response.data));
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
  // console.log(addTodoAsync().then((res) => console.log("test", res)));
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users?.data);
  const usersDataStatus = useSelector((state) => state.users?.status);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log("usersData", usersData, usersDataStatus);
  // useEffect(async () => {
  //   // const { data } = await axios("https://jsonplaceholder.typicode.com/users");
  //   // console.log(data);
  // }, []);

  return (
    <nav>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img
            src={Profile}
            alt="profile"
          />
        </div>
        <div className={styles.info}>
          <h2>{username}</h2>
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
