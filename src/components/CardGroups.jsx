import React from "react";
import { GrMore } from "react-icons/gr";
import { HiKey, HiLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";

import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import styles from "./CardGroups.module.scss";

function CardGroups() {
  return (
    <div className={styles.cardGroup}>
      <Link
        to="/dashboard"
        className={styles.card}
      >
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
      </Link>
      <Link
        to="/dashboard"
        className={styles.card}
      >
        <p>
          <span>
            <HiKey />
          </span>
        </p>
        <h2>Create Signup Page</h2>
        <div className={styles.image}>
          <img
            src={Image1}
            alt="user-1"
          />
          <img
            src={Image1}
            alt="user-2"
          />
          <img
            src={Image1}
            alt="user-3"
          />
        </div>
      </Link>
    </div>
  );
}

export default CardGroups;
