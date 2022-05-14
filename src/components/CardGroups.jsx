import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { HiKey } from "react-icons/hi";
import { GrMore } from "react-icons/gr";
import styles from "../pages/dashboard/Dashboard.module.scss";
import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";

function CardGroups() {
  return (
    <div className={styles.cardGroup}>
      <div className={styles.card}>
        <p>
          <span>
            <HiLightBulb />
          </span>
          <button>
            <GrMore />
          </button>
        </p>
        <h2>R&D for New Banking Mobile App</h2>
        <div className={styles.image}>
          <img src={Image1} alt="user-1" />
          <img src={Image1} alt="user-2" />
          <img src={Image1} alt="user-3" />
        </div>
      </div>
      <div className={styles.card}>
        <p>
          <span>
            <HiKey />
          </span>
        </p>
        <h2>Create Signup Page</h2>
        <div className={styles.image}>
          <img src={Image1} alt="user-1" />
          <img src={Image1} alt="user-2" />
          <img src={Image1} alt="user-3" />
        </div>
      </div>
    </div>
  );
}

export default CardGroups;
