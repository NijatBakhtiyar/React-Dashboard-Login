/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { toast } from "react-toastify";

import Facebook from "../images/facebook.png";
import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import styles from "./Activities.module.scss";

function ActiveTasks({ task, completedTask }) {
  return (
    <div
      className={styles.activeTasks}
      onClick={() => {
        completedTask(task?.id);
        toast.success("Completed!!!");
      }}
    >
      <div className={styles.logo}>
        <img
          src={Facebook}
          alt={`${task.name}`}
        />
      </div>
      <div className={styles.text}>
        <h2>{task.name}</h2>
        <h6>{task.username}</h6>
      </div>
      <div className={styles.userImages}>
        <img
          src={Image1}
          alt="user-1"
        />
        <img
          src={Image2}
          alt="user-2"
        />
        <img
          src={Image3}
          alt="user-3"
        />
      </div>
    </div>
  );
}

export default ActiveTasks;
