import React from "react";
import styles from "../styles/FilmProgressCard.module.css";

export const ProgressBar = ({ productionGoal, productionAmount }) => {
  const progress = (productionAmount / productionGoal) * 100;

  return (
    <div className={styles.progressBarContainer}>
      <p className={styles.progressBarTitle}>
        Progreso de películas producidas
      </p>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={styles.progressText}>{Math.round(progress)} Peliculas <br /> producidas</div>
    </div>
  );
};
