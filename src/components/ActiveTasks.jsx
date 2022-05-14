/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import styles from "./Activities.module.scss";

function ActiveTasks({ task, completedTask }) {
  return (
    <div
      className={styles.activeTasks}
      onClick={() => completedTask(task?.id)}
    >
      <div className={styles.logo}>
        
      </div>
    </div>
  );
}

export default ActiveTasks;
