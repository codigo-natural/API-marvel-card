import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/20/solid";
import React from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>Logo Marvel</li>
        <li>Home</li>
        <li>Personajes</li>
      </ul>
      <ul className={styles.ul}>
        <li><BellIcon className={styles.iconPush} /></li>
        <li><Cog6ToothIcon className={styles.icon} /></li>
      </ul>
    </nav>
  );
}