import React from "react";
import Image from "next/image";
import styles from "../styles/CharacterCard.module.css";

export const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <div className={styles.rotator}>
        <div className={styles.cardContent}>
          <h3>{character.name}</h3>
        </div>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={300}
          height={400}
        />
        <div className={styles.cardDescription}>
          <h4>Comics:</h4>
        </div>
        <ul>
          {Array.isArray(character.comics.available) ? (
            character.comics.available.map((comic) => (
              <li key={comic.available}>{comic.available}</li>
            ))
          ) : (
            <li>No hay comics disponibles.</li>
          )}
        </ul>
      </div>
    </div>
  );
};
