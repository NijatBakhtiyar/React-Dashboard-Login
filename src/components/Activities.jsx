import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import SkeletonLoader from "../constants/SkeletonLoader";
import { getUsers } from "../redux/users";
import ActiveTasks from "./ActiveTasks";
import styles from "./Activities.module.scss";
import CompletedTasks from "./CompletedTasks";

function Activities() {
  const dispatch = useDispatch();
  const usersDataStatus = useSelector((state) => state.users?.status);
  const [active, setActive] = useState("activeTask");
  const [newData, setNewData] = useState([]);
  const activeTasks = newData?.filter((task) => task.isComplete == false);
  const completedTasks = newData?.filter((task) => task.isComplete == true);

  useEffect(() => {
    dispatch(getUsers()).then((res) => {
      setNewData(
        res.payload?.slice(0, 3).map((item) => {
          return { ...item, isComplete: false };
        })
      );
    });
  }, []);

  function completeTask(id) {
    setNewData(
      newData.map((task) => {
        if (task.id == id) {
          return { ...task, isComplete: true };
        } else {
          return task;
        }
      })
    );
  }

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
        {active === "activeTask" ? (
          usersDataStatus === "Loading" ? (
            <SkeletonLoader />
          ) : (
            activeTasks.map((task) => (
              <ActiveTasks
                task={task}
                key={task.id}
                completedTask={completeTask}
              />
            ))
          )
        ) : (
          completedTasks.map((task) => (
            <CompletedTasks
              task={task}
              key={task.id}
            />
          ))
        )}
      </div>
      <ToastContainer
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        autoClose={1000}
      />
    </div>
  );
}

export default Activities;
