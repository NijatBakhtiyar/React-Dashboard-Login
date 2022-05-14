import React from "react";
import styles from "./Activities.module.scss";

function ActiveTasks() {
  return (
    <div className={styles.activeTasks}>
      <h2>Today</h2>
      Active Tasks
      <h2>Tomorrow</h2>
    </div>
  );
}

export default ActiveTasks;
