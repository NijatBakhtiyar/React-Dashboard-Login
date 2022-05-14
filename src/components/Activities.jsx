import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";

import ActiveTasks from "./ActiveTasks";
import styles from "./Activities.module.scss";
import CompletedTasks from "./CompletedTasks";

function Activities() {
  const [active, setActive] = useState("activeTask");

  return (
    <div className={styles.allActivities}>
      <div className={styles.monthly}>
        <h2>Monthly Tasks</h2>
        <div className={styles.btns}>
          <button>Archieve</button>
          <button>
            <HiPlusSm /> New
          </button>
        </div>
      </div>

      <div className={styles.header}>
        <div>
          <button
            onClick={() => setActive("activeTask")}
            className={active === "activeTask" ? styles.active : ""}
          >
            Active Tasks
          </button>
          <button
            onClick={() => setActive("completed")}
            className={active === "completed" ? styles.active : ""}
          >
            Completed
          </button>
        </div>
        <div className={styles.search}>
          <FiSearch />
          <input
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className={styles.tasks}>
        {active === "activeTask" ? <ActiveTasks /> : <CompletedTasks />}
      </div>
    </div>
  );
}

export default Activities;
