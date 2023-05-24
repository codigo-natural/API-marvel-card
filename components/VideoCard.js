import React from "react";
import styles from "../styles/ImageCard.module.css";

export const VideoComponent = () => {
  return (
    <div>
      <iframe
        width="560"
        height="195"
        src="https://www.youtube.com/embed/TcMBFSGVi1c"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.image}
      ></iframe>
    </div>
  );
};
