import { ProgressBar } from "./FilmProgressCard";
import { VideoComponent } from "./VideoCard";
import { ImageComponent } from "./ImageCard";
import styles from "../styles/Header.module.css"

export const Header = () => {
  return (
    <div className={styles.header}>
      <ProgressBar productionGoal={200} productionAmount={100} />
      <VideoComponent />
      <ImageComponent />
    </div>
  );
};
