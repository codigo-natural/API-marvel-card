import React from 'react';
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import styles from '../styles/Paginator.module.css'

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.paginator}>
      <button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeftIcon className={styles.icon} />
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRightIcon className={styles.icon} />
      </button>
    </div>
  );
};