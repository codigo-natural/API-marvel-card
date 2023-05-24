import React from "react";
import Image from "next/image";
import styles from "../styles/CharacterCard.module.css";

export const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3>{character.name}</h3>
        </div>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={300}
          height={400}
        />
        <div className={styles.footer}>
          <div className={styles.cardDescription}>
            <h4>Comics:</h4>
            <p>{character.comics.available}</p>
          </div>
          <div className={styles.cardDescription}>
            <h4>Películas:</h4>
            <p>{character.series.available}</p>
          </div>
        </div>
    </div>
  );
};