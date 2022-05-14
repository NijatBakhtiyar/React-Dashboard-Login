import "./SkeletonLoader.module.scss";

import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonLoader({ count = 1 }) {
  return (
    <div className="skeleton-loader">
      <ul className="list">
        {Array(count)
          .fill()
          .map((item, index) => (
            <li
              className="card"
              key={index}
            >
              <Skeleton height={100} />
              <p className="card-channel">
                <Skeleton
                  width={`60%`}
                  height={20}
                />
              </p>
              <div className="card-metrics">
                <Skeleton
                  width={`90%`}
                  height={20}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SkeletonLoader;
