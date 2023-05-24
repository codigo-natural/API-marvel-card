import React from "react";
import Image from "next/image";
import styles from '../styles/ImageCard.module.css'

export const ImageComponent = () => {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=315&q=80"
        alt="Marvel Poster"
        width="560"
        height="195"
        className={styles.image}
      />
    </div>
  );
};